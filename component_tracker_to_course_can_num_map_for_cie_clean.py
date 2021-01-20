## where y11 / y12 / y13 / y10 is each a multiline string representing
## exam entry data copied from a gSheet

y11 = '''Bob Smith	Bob	Smith Bob	M	1111	12345B130111	Bob (1111)	01/01/2000	bobsmith@school.com			0610/CY	0450/Y	0620/CY						0445/CY			0500/BS	0475/CY		0460/BY					0547/Y		4MA1/HR					0625/CY					0610/CY,0450/Y,0620/CY,0445/CY,0500/BS,0475/CY,0460/BY,0547/Y,4MA1/HR,0625/CY	TRUE	FALSE	FALSE'''

from re import search
from json import dumps
from collections import defaultdict

courses = defaultdict(lambda: [])

for group in [y11, y12, y13, y10]:
     for row in group.split("\n"):
          row = row.split("\t")
          for cell in row[10:]:
               if search("9\d\d\d|0\d{3}|8685", cell):
                    candidate = row[5]
                    if candidate and len(cell) < 8:
                         courses[cell].append(candidate)

f = open("summer_2021_cie_entries.json", "w")
json_data = dumps(courses)
f.write(json_data)
f.close()
