import numpy

def toMorse(i):
    if i=='a':
        return "._"
    elif i=='b':
        return "-..."
    elif i=='c':
        return "-.-."
    elif i=='d':
        return "-.."
    elif i=='e':
        return "."
    elif i=='f':
        return "..-."
    elif i=='g':
        return "--."
    elif i=='h':
        return "...."
    elif i=='i':
        return ".."
    elif i=='j':
        return ".---"
    elif i=='k':
        return "-.-"
    elif i=='l':
        return ".-.."
    elif i=='m':
        return "--"
    elif i=='n':
        return "-."
    elif i=='o':
        return "---"
    elif i=='p':
        return ".--."
    elif i=='q':
        return "--.-"
    elif i=='r':
        return ".-."
    elif i=='s':
        return "..."
    elif i=='t':
        return "-"
    elif i=='u':
        return "..-"
    elif i=='v':
        return "...-"
    elif i=='w':
        return ".--"
    elif i=='x':
        return "-..-"
    elif i=='y':
        return "-.--"
    elif i=='z':
        return "--.."
    else:
        return " "

lang1 = open("humanlang.txt","r")
textArea = lang1.readline()
lang2 = open("code.txt","w")
MorseCode = "??+ "


for i in textArea:
    MorseCode += toMorse(i)
MorseCode += " +??"
lang2.write(MorseCode)
lang1.close()
lang2.close()
print(MorseCode)