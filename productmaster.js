db.productmaster.insertMany([{ ProductNo: 'P00001', Description: 'T-Shirts', Profit_percent: 5, Unit_Measure: 'Piece', QtyOnHand: 200, ReOderLvl: 50, SellPrice: 350, CostPrice: 250 },
{ ProductNo: 'P0345',  Description: 'Shirts', Profit_percent: 6, Unit_Measure: 'Piece', QtyOnHand: 150, ReOderLvl: 50, SellPrice: 500, CostPrice: 350 },
{ ProductNo: 'P06734', Description: 'Cotton Jeans', Profit_percent: 5, Unit_Measure: 'Piece', QtyOnHand: 100, ReOderLvl: 20, SellPrice: 600, CostPrice: 450 },
{ ProductNo: 'P07865', Description: 'Jeans', Profit_percent: 5, Unit_Measure: 'Piece', QtyOnHand: 100, ReOderLvl: 20, SellPrice: 750, CostPrice: 500 },
{ ProductNo: 'P07868', Description: 'Trousers', Profit_percent: 2, Unit_Measure: 'Piece', QtyOnHand: 150, ReOderLvl: 20, SellPrice: 850, CostPrice: 550 },
{ ProductNo: 'P07885', Description: 'Pull Overs', Profit_percent: 2.5, Unit_Measure: 'Piece', QtyOnHand: 80, ReOderLvl: 30, SellPrice: 700, CostPrice: 450 },
{ ProductNo: 'P07965', Description: 'Denim Shirts', Profit_percent: 4, Unit_Measure: 'Piece', QtyOnHand: 100, ReOderLvl: 40, SellPrice: 350, CostPrice: 250 },
{ ProductNo: 'P07975', Description: 'Lycra Tops', Profit_percent: 5, Unit_Measure: 'Piece', QtyOnHand: 70, ReOderLvl: 30, SellPrice: 300, CostPrice: 175 },
{ ProductNo: 'P08865', Description: 'Skirts', Profit_percent: 5, Unit_Measure: 'Piece', QtyOnHand: 75, ReOderLvl: 30, SellPrice: 450, CostPrice: 300 }])

db.productmaster.find()
load("productmaster.js")