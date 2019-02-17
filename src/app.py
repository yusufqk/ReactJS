#!/usr/bin/python3


#The backend handles the toll calculation

import hug

api = hug.API(__name__)
api.http.add_middleware(hug.middleware.CORSMiddleware(api))

@hug.get('/calc')
def calc(mileage, vehicle, transponder, time, hour):

    print(mileage)
    print(vehicle)
    print(transponder)
    print(time)
    print(hour)

    price = 0

    if time == "AM":

        if int(hour) >= 6 and int(hour) < 9:

            if vehicle == "L":

                price = 37.07 * int(mileage)

            elif vehicle == "H":

                price = 74.18 * int(mileage)

            else:

                price = 111.22 * int(mileage)

        elif int(hour) >= 9 and int(hour) < 10:

            if vehicle == "L":

                price = 32.59 * int(mileage)

            elif vehicle == "H":

                price = 65.18 * int(mileage)

            else:

                price = 97.78 * int(mileage)


        elif int(hour) >= 10 and int(hour) < 12:

            if vehicle == "L":

                price = 28.33 * int(mileage)

            elif vehicle == "H":

                price = 56.66 * int(mileage)

            else:

                price = 84.99 * int(mileage)

        elif int(hour) == 12 or int(hour) == 1 or int(hour) ==2 or int(hour) == 3 or int(hour) == 4 or int(hour) == 5 or int(hour) == 6:

            if vehicle == "L":

                price = 21.62 * int(mileage)

            elif vehicle == "H":

                price = 43.24 * int(mileage)

            else:

                price = 64.86 * int(mileage)






    elif time == "PM":



        if int(hour) == 12 or int(hour) == 1 or int(hour) ==2 or int(hour) == 3:

            if vehicle == "L":

                price = 28.33 * int(mileage)

            elif vehicle == "H":

                price = 56.66 * int(mileage)

            else:

                price = 84.99 * int(mileage)

        if int(hour) >= 4 and int(hour) < 7:

            if vehicle == "L":

                price = 38.42 * int(mileage)

            elif vehicle == "H":

                price = 76.83 * int(mileage)

            else:

                price = 115.25 * int(mileage)

        elif int(hour) >= 7 and int(hour) <= 12:


            if vehicle == "L":

                price = 21.62 * int(mileage)

            elif vehicle == "H":

                price = 43.24 * int(mileage)

            else:

                price = 64.86 * int(mileage)


    t = "No"

    if transponder == "N":

        price += 407
        t = "Yes"




    price = price/100


    return price, t


























