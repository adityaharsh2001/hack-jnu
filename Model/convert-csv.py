import json
import csv

def json_to_csv(json_file, csv_file):
    with open(json_file, 'r') as file:
        data = json.load(file)

    with open(csv_file, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(data[0].keys())  # Write header row

        for item in data:
            writer.writerow(item.values())

# Usage example
json_to_csv('cases.json', 'data.csv')
