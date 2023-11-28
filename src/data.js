export const users = [
    {
        userId : 201,
        name: "Lisa",
        email: "lisa@gmail.com",
        phoneNum : "8250571845",
        profilepic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1bpO0XDD8fbmRvnbnkCoQNFFoH3AqofVTg&usqp=CAU",
        lastmessage : "",
        lastUpdate : new Date().getTime(),
        chats : []
    },
    {
        userId : 202,
        name: "Ashish",
        email: "Ashish@gmail.com",
        phoneNum : "9250571675",
        profilepic : "https://t4.ftcdn.net/jpg/05/60/70/71/360_F_560707155_hwQ7Kzf5fic1eF2VMWTgZvBFlzXOihVA.jpg",
        lastmessage : "",
        lastUpdate : new Date().getTime(),
        chats : []
    },
    {
        userId : 203,
        name: "Namrata",
        email: "Namrata@gmail.com",
        phoneNum : "9250571675",
        profilepic : "https://i.pinimg.com/236x/db/b9/cb/dbb9cbe3b84da22c294f57cc7847977e.jpg",
        lastmessage : "",
        lastUpdate : new Date().getTime(),
        chats : []
    },
    {
        userId : 204,
        name: "Bhupendra Jogi",
        email: "Bhupendra@gmail.com",
        phoneNum : "7606538185",
        profilepic : "https://latestbatmya.in/wp-content/uploads/2023/10/84DwLLsq_400x400.jpg",
        lastmessage : "",
        lastUpdate : new Date().getTime(),
        chats : []
    },
    {
        userId : 209,
        name: "Elon",
        email: "Elon@hotmail.com",
        phoneNum : "6238978125",
        profilepic : "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
        lastmessage : "",
        lastUpdate : new Date().getTime(),
        chats : []
    },

]

export let currentUsers = {
    contactList : [
        {
            userId : 205,
            name: "Joey",
            email: "Joey@hotmail.com",
            phoneNum : "6208508115",
            profilepic : "https://www.hindustantimes.com/ht-img/img/2023/06/14/550x309/joey_1686746481533_1686746489258.jpg",
            lastmessage : "",
            lastUpdate : new Date().getTime(),
            chats : [
                {
                    text : "how you doin?",
                    sender : "user",
                    messageId : 1 
                },
                {
                    text : "great! what about you?",
                    sender : "me",
                    messageId : 2 
                },
                {
                    text : "are you coming for the reunion?",
                    sender : "user",
                    messageId : 3 
                },
                {
                    text : "No bro, won't be able to make it!",
                    sender : "me",
                    messageId : 4 
                },
                
            ]
        },
        // --
        {
            userId : 204,
            name: "Bhupendra Jogi",
            email: "Bhupendra@gmail.com",
            phoneNum : "7606538185",
            profilepic : "https://latestbatmya.in/wp-content/uploads/2023/10/84DwLLsq_400x400.jpg",
            lastmessage : "",
            lastUpdate : new Date().getTime(),
            chats : [
                {
                    text : "US me kahan kahan gye ho?",
                    sender : "me",
                    messageId : 1 
                },
                {
                    text : "US me bohot jagah gaya hun",
                    sender : "user",
                    messageId : 2 
                },
                {
                    text : "naam batao?",
                    sender : "me",
                    messageId : 3 
                },
                {
                    text : "Bhupendra jogi",
                    sender : "user",
                    messageId : 4 
                },
                {
                    text : "aayein!",
                    sender : "me",
                    messageId : 4 
                },
            ]
        },
    ]
}