

array1 = [10,20,30,40,50]

for x in array1:
 print(x)
 

# Accessing Elements
print (array1[0])
print (array1[2])

# Inserting Elements
array1.insert(1,60)

for x in array1:
 print(x)

# Remove Elements
array1.remove(40)

for x in array1:
 print(x)

# Search Operation
print (array1.index(30))

# Update Operation
array1[2] = 80

for x in array1:
 print(x)
