class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class SLinkedList:
    def __init__(self):
        self.head = None

# Print the linked list
    def listprint(self):
        printval = self.head
        while printval is not None:
            print (printval.data)
            printval = printval.next
    def AtBegining(self,newdata):
        NewNode = Node(newdata)

# Update the new nodes next val to existing node
        NewNode.next = self.head
        self.head = NewNode

# Function to add newnode
    def AtEnd(self, newdata):
        NewNode = Node(newdata)
        if self.head is None:
            self.head = NewNode
            return
        laste = self.head
        while(laste.next):
            laste = laste.next
        laste.next=NewNode

# Function to add node
    def Inbetween(self,middle_node,newdata):
        if middle_node is None:
            print("The mentioned node is absent")
            return

        NewNode = Node(newdata)
        NewNode.next = middle_node.next
        middle_node.next = NewNode

# Function to remove node
    def RemoveNode(self, Removekey):

        HeadVal = self.head

        if (HeadVal is not None):
            if (HeadVal.data == Removekey):
                self.head = HeadVal.next
                HeadVal = None
                return

        while (HeadVal is not None):
            if HeadVal.data == Removekey:
                break
            prev = HeadVal
            HeadVal = HeadVal.next

        if (HeadVal == None):
            return

        prev.next = HeadVal.next

        HeadVal = None


# list = SLinkedList()
# list.head = Node("Mon")
# e2 = Node("Tue")
# e3 = Node("Thu")

# list.head.next = e2
# e2.next = e3

# # Insertion at the beginning of the list
# list.AtBegining("Sun")
# list.AtEnd("Thu")
# list.Inbetween(list.head.next,"Fri")

# list.listprint()

list = SLinkedList()
list.AtBegining("Mon")
list.AtBegining("Tue")
list.AtBegining("Wed")
list.AtBegining("Thu")
list.RemoveNode("Tue")
list.listprint()