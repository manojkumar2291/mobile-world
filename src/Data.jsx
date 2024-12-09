const DATA = [
    {
        id: 0,
        title: "IPhone 11",
        price: 750,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "/assets/images/products/iphone11.png"
    },
    {
        id: 1,
        title: "IPhone 11 Pro Max",
        price: 800,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "/assets/images/products/iphone11promax.png"
    },
    {
        id: 2,
        title: "IPhone 12 Mini",
        price: 950,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "/assets/images/products/iphone12mini.png"
    },
    {
        id: 3,
        title: "IPhone 12",
        price: 1050,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "/assets/images/products/iphone12.png"
    },
    {
        id: 4,
        title: "IPhone 12 Pro",
        price: 1150,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "/assets/images/products/iphone12pro.png"
    },
    {
        id: 5,
        title: "IPhone 12 Pro Max",
        price: 1250,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "/assets/images/products/iphone12promax.png"
    },



    {
        id: 10,
        title: "Samsung Galaxy S22 Ultra",
        price: 1199,
        desc: "The Samsung Galaxy S22 Ultra redefines mobile technology with its high-performance Snapdragon processor, stunning AMOLED display, and cutting-edge camera system. Experience the ultimate flagship.",
        img: "/assets/images/products/samsungS22ultra.jpg"
    },
    {
        id: 11,
        title: "Google Pixel 7 Pro",
        price: 899,
        desc: "Google Pixel 7 Pro combines AI-powered innovation with incredible hardware. Its advanced camera system and stock Android ensure an unmatched mobile experience.",
        img: "/assets/images/products/googlePixel7pro.jpg"
    },
    {
        id: 12,
        title: "OnePlus 11",
        price: 749,
        desc: "The OnePlus 11 delivers flagship performance with its Snapdragon 8 Gen 2 processor, stunning 120Hz AMOLED display, and Hasselblad-powered camera system.",
        img: "/assets/images/products/oneplus11.jpg"
    },
    {
        id: 13,
        title: "Sony Xperia 1 IV",
        price: 1399,
        desc: "The Sony Xperia 1 IV is a powerhouse for creators, offering a 4K OLED display, advanced manual camera controls, and professional-grade video recording features.",
        img: "/assets/images/products/sonyXperia1iv.jpg"
    },
    {
        id: 14,
        title: "Xiaomi Mi 13 Pro",
        price: 1099,
        desc: "Xiaomi Mi 13 Pro sets new standards with its Leica-tuned cameras, blazing-fast Snapdragon 8 Gen 2 chip, and ultra-fast charging technology.",
        img: "/assets/images/products/xiaomiMi13pro.jpg"
    },
    {
        id: 15,
        title: "Apple iPhone 13 Mini",
        price: 699,
        desc: "Compact and powerful, the iPhone 13 Mini is perfect for those who love portability without sacrificing performance. Powered by the A15 Bionic chip.",
        img: "/assets/images/products/iphone13mini.jpg"
    },
    {
        id: 16,
        title: "Huawei P50 Pro",
        price: 999,
        desc: "The Huawei P50 Pro features a stunning design and an incredible Leica camera system, pushing the boundaries of mobile photography.",
        img: "/assets/images/products/huaweiP50pro.jpg"
    },
    {
        id: 17,
        title: "Oppo Find X5 Pro",
        price: 1199,
        desc: "The Oppo Find X5 Pro offers a beautiful ceramic design, advanced photography capabilities, and powerful performance for a premium smartphone experience.",
        img: "/assets/images/products/oppoFindX5pro.jpg"
    },
    {
        id: 18,
        title: "Vivo X80 Pro",
        price: 999,
        desc: "Vivo X80 Pro brings ZEISS optics, gimbal stabilization, and an immersive AMOLED display for a flagship experience that excels in photography.",
        img: "/assets/images/products/vivoX80pro.jpg"
    },
    {
        id: 19,
        title: "Motorola Edge 30 Ultra",
        price: 899,
        desc: "Motorola Edge 30 Ultra is a sleek powerhouse with a 200MP camera, lightning-fast charging, and a smooth 144Hz display for enthusiasts.",
        img: "/assets/images/products/motorolaEdge30ultra.jpg"
    }, {
        id: 20,
        title: "Realme GT 2 Pro",
        price: 749,
        desc: "Realme GT 2 Pro combines cutting-edge Snapdragon 8 Gen 1 performance with a sleek design and an impressive 2K AMOLED display, offering flagship-level features at a competitive price.",
        img: "/assets/images/products/realmeGT2pro.jpg"
    },
    {
        id: 21,
        title: "Asus ROG Phone 6 Pro",
        price: 1499,
        desc: "Asus ROG Phone 6 Pro is a gamer’s delight with its Snapdragon 8+ Gen 1 chip, a 165Hz AMOLED display, and advanced cooling technology for extended gaming sessions.",
        img: "/assets/images/products/asusROGPhone6pro.jpg"
    },
    {
        id: 22,
        title: "Lenovo Legion Phone Duel 2",
        price: 999,
        desc: "The Lenovo Legion Phone Duel 2 redefines gaming phones with its dual cooling system, immersive 144Hz display, and ultra-fast charging for uninterrupted gaming.",
        img: "/assets/images/products/lenovoLegionDuel2.jpg"
    },
    {
        id: 23,
        title: "Nokia X30 5G",
        price: 549,
        desc: "The Nokia X30 5G brings eco-conscious design and durable performance with its recycled materials, PureView camera technology, and 5G connectivity.",
        img: "/assets/images/products/nokiaX305G.jpg"
    },
    {
        id: 24,
        title: "Honor Magic 4 Pro",
        price: 1149,
        desc: "The Honor Magic 4 Pro features a stunning quad-curved OLED display, top-notch photography, and a Snapdragon 8 Gen 1 processor for a premium experience.",
        img: "/assets/images/products/honorMagic4pro.jpg"
    },
    {
        id: 25,
        title: "Samsung Galaxy Z Fold 4",
        price: 1799,
        desc: "The Galaxy Z Fold 4 offers a groundbreaking foldable design, multitasking capabilities, and flagship-level performance, redefining the concept of smartphones.",
        img: "/assets/images/products/samsungGalaxyZFold4.jpg"
    },
    {
        id: 26,
        title: "iPhone 14 Pro Max",
        price: 1599,
        desc: "The iPhone 14 Pro Max introduces the Dynamic Island, A16 Bionic chip, and a 48MP main camera for unparalleled performance and photography.",
        img: "/assets/images/products/iphone14promax.jpg"
    },
    {
        id: 27,
        title: "Xiaomi Redmi Note 12 Pro+",
        price: 399,
        desc: "Xiaomi Redmi Note 12 Pro+ combines affordability with a 200MP camera, AMOLED display, and fast charging, making it a standout in its price range.",
        img: "/assets/images/products/redmiNote12ProPlus.jpg"
    },
    {
        id: 28,
        title: "Poco F4 GT",
        price: 599,
        desc: "The Poco F4 GT is built for gamers with its Snapdragon 8 Gen 1 processor, magnetic pop-up triggers, and an AMOLED display with a 120Hz refresh rate.",
        img: "/assets/images/products/pocoF4GT.jpg"
    },
    {
        id: 29,
        title: "Google Pixel Fold",
        price: 1799,
        desc: "Google Pixel Fold brings the best of foldable design and software optimization, paired with a powerful Tensor chip and premium build quality.",
        img: "/assets/images/products/googlePixelFold.jpg"
    }
]

export default DATA;