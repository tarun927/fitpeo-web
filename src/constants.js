import {faBagShopping, faDiceD6, faKey, faNewspaper, faPercent, faQuestion, faSackDollar, faUser, faWallet } from '@fortawesome/free-solid-svg-icons'

export const sideMenu = [
    {
        name:"Dashboard",
        icon:faKey
    },
    {
        name:"Product",
        icon:faDiceD6
    },
    {
        name:"Customers",
        icon:faUser
    },
    {
        name:"Income",
        icon:faWallet
    },
    {
        name:"Promote",
        icon:faPercent
    },
    {
        name:"Help",
        icon:faQuestion
    }
]

export const cardInfo=[
    {name:"Earning",icon:faSackDollar,amount:"$198k",info:"+27.8% this month",color:"#06ab4d",bg:"#e7fff2"},
    {name:"Orders",icon:faNewspaper,amount:"$2.4k",info:"-2% this month",color:"#a409fe",bg:"#e7dbff"},
    {name:"Balance",icon:faWallet,amount:"$2.4k",info:"-2% this month",color:"#095ac0",bg:"#ccf2ff"},
    {name:"Total Sales",icon:faBagShopping,amount:"$89k",info:"+11% this month",color:"#dc1527",bg:"#fed8f3"}
  ]

  export const monthArr = [
    {name:"Jan",val:"40%",bg:"#eae8e8"},
    {name:"Feb",val:"50%",bg:"#eae8e8"},
    {name:"Mar",val:"90%",bg:"#eae8e8"},
    {name:"Apr",val:"70%",bg:"#eae8e8"},
    {name:"May",val:"40%",bg:"#eae8e8"},
    {name:"Jun",val:"50%",bg:"#eae8e8"},
    {name:"Jul",val:"40%",bg:"#eae8e8"},
    {name:"Aug",val:"100%",bg:"#5931ea"},
    {name:"Sep",val:"70%",bg:"#eae8e8"},
    {name:"Oct",val:"60%",bg:"#eae8e8"},
    {name:"Nov",val:"50%",bg:"#eae8e8"},
    {name:"Dec",val:"40%",bg:"#eae8e8"},
];