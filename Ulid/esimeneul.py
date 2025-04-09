# def mySum(a,b):
#     if isinstance(a,int) and isinstance(b,int):
#         return a+b
#     else:
#         print("vale andmetüüp")
#         
# ### *Iteratsioon 2- Rohkem tehteid**
# # - Lisa lahutamine,korrutamine ja jagamine
# # - Loo valikumenüü (1. liida, 2.lahuta, 3.korruta ja 4.jaga).
# 
# def myMiinus(a,b):
#     if isinstance(a,int) and isinstance(b,int):
#         return a-b
#     else:
#         print("vale andmetüüp")
#         
# def myKorr(a,b):
#     if isinstance(a,int) and isinstance(b,int):
#         return a*b
#     else:
#         print("vale andmetüüp")
#         
# def myJaga(a,b):
#     try:
#         if isinstance(a,int) and isinstance(b,int):
#             return a/b
#         else:
#             print("vale andmetüüp")
#     except ZeroDivisionError:
#         print("ei sa jagada nulliga")
#         
# ### Iteratsioon 3- Sisendi valideerimmine
# # _ Kontrolli, et kasutaja sisestab numbreid.
# def main():
#     while True :
#         valik = input("mida sa tahad?")
#         if valik == "1":
#             a = int(input("sisesta number1: "))
#             b = int(input("sisesta number2: "))
#             result = mySum(a,b)
#             myArr[0] += 1
#             print("Tulemus on: ", result)
#             
#         elif valik == "2":
#             a = int(input("sisesta number1: "))
#             b = int(input("sisesta number2: "))
#             result = myMiinus(a,b)
#             myArr[1] += 1
#             print("Tulemus on: ", result)
#             
#         elif valik == "3":
#             a = int(input("sisesta number1: "))
#             b = int(input("sisesta number2: "))
#             result = myKorr(a,b)
#             myArr[2] += 1
#             print("Tulemus on: ", result)
#             
#         elif valik == "4":
#             a = int(input("sisesta number1: "))
#             b = int(input("sisesta number2: "))
#             result = myJaga(a,b)
#             myArr[3] += 1
#             print("Tulemus on: ", result)
#         else:
#             print("Seda ei ole valikus")
# 
# ### Iteratsioon 4- Loogiline täiendus
# def displayinfo():
#     print("Kokku oli", sum(myArr))
#     print("summerimine töötas", myArr[0],"korda")
#     print("lahutamine oli", myArr[1],"korda")
#     print("korrutamine oli", myArr[2],"korda")
#     print("jagamine oli", myArr[3],"korda")
# 
# myArr = [0,0,0,0]
#         
# ### Iteratsioon 5 - Parandamine



        
