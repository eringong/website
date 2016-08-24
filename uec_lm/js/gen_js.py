'''
This script reads in the logic model data downloaded from Google Sheets as a csv.
It creates:
1. .js file with variables for each of the columns in the LM and the boxes w/in each column (lm_data.js)
2. .js file with variables for each of the node lists used to sort/filter the columns based on items in the relationships column (node_lists.js)
'''

import pandas as pd
import json

#import and prep df
df = pd.read_csv("lm_data.csv")
df.expanded_text = df.expanded_text.str.replace('\n', '<br>')
df['id_short_tag'] = '#node-div-' + df['id_short'].astype(str)

#create lm_data.js

outfile = file('lm_data.js','w')

for element in list(df.lm_type.unique()):
    element_dict = {}

    new_df = df[df['lm_type'] == element]
    for i, row in new_df.iterrows():
        new_item_value = {
            'lm_type': row['lm_type'],
            'text': row['text'],
            'expanded_text': row['expanded_text'],
#             'node_connections':row['node_connections'],
        }
        new_item_key = row['id_short']
        element_dict[new_item_key] = new_item_value
    
    outfile.write(str(element)+' = '+json.dumps(element_dict, indent = 2)+';\n\n')

outfile.close()


#create node_lists.js

outfile_node_list = file('node_lists.js','w')

for col in df.columns:
    if col[:8] == "connect_":
        df[col].fillna(df.id_short_tag, inplace=True)
        node_list = df[col].tolist()
        node_list = [x for x in node_list if x != 1.0]
        outfile_node_list.write('node_list_' + str(col)+' = '+json.dumps(node_list, indent = 2)+';\n\n')

outfile_node_list.close()