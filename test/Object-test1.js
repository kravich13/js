// Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта: 
var obj = {
    key: "с"
}
console.log(obj.key) // обращение через точку
console.log(obj["key"]) // обращение через квадратные скобки в кавычках

// Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли. 
var obj = {
    Петя: "1000$",
    Коля: "700$"
}
console.log(obj.Петя)
console.log(obj.Коля)

// Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели. 
var obj = {
    Monday: "theFirst",
    Tuesday: "second",
    Wednesday: "third", 
    Thursday: "fourth",
    Friday: "fifth",
    Saturday: "sixth", 
    Sunday: "seventh"
}
console.log(obj.Thursday)


// создать магазин с различными предметами как в Lineage2. Поделить на бижутерию, броню и пушки.
var gameShop = {
    weapons: {
        S: { // grade
            "AM": {
                money: 100000000,
                enchanted: 0,
                SA: "focus",
                LS: false,
                fullName: "Arcana Mace"
            },
            "DB": {
                money: 100000000,
                enchanted: 0,
                SA: "focus",
                LS: false,
                fullName: "Draconic Bow"
            },
            "HD": {
                money: 100000000,
                enchanted: 0,
                SA: "focus",
                LS: false,
                fullName: "Heavens Divider"
            },
            "AS": {
                money: 100000000,
                enchanted: 0,
                SA: "focus",
                LS: false,
                fullName: "Angel Slayer"
            },
            "TM": {
                money: 100000000,
                enchanted: 0,
                SA: "focus",
                LS: false,
                fullName: "Tallum Blade*Dark Legion's Edge"
            }
        }
    },

    // начинается броня
    armors: {
        S: { // grade 
            "ICB": {
                money: 30000000,
                enchanted: 0,
                fullName: "Imperial Crusader Breastplate"
            },
            "ICG": {
                money: 25000000,
                enchanted: 0,
                fullName: "Imperial Crusader Gaiters"
            },
            "ICH": {
                money: 25000000,
                enchanted: 0,
                fullName: "Imperial Crusader Helmet"
            },
            "ICG": {
                money: 25000000,
                enchanted: 0,
                fullName: "Imperial Crusader Gauntlet"
            },
            "ICB": {
                money: 25000000,
                enchanted: 0,
                fullName: "Imperial Crusader Boots"
            }
        },
        A: {
            "DCR": {
                money: 15000000,
                enchanted: 0,
                fullName: "Dark Crystal Robe"
            },
            "DCH": {
                money: 10000000,
                enchanted: 0,
                fullName: " Dark Crystal Helmet"
            },
            "DCB": {
                money: 10000000,
                enchanted: 0,
                fullName: "Dark Crystal Boots Robe"
            },
            "DCG": {
                money: 10000000,
                enchanted: 0,
                fullName: "Dark Crystal Gloves Robe"
            }
        }
    },

    // бижа
    tateossian: {
        S: {
            "TTR": {
                money: 20000000,
                enchanted: 0,
                fullName: "Tateossian Ring"
            },
            "TTE": {
                money: 25000000,
                enchanted: 0,
                fullName: "Tateossian Earring"
            },
            "TTN": {
                money: 30000000,
                enchanted: 0,
                fullName: "Tateossian Necklace"
            },
        }
    }
}