document.addEventListener("DOMContentLoaded", () => {
  // ====== КОНФИГ (оставил твои данные) ======
 const ENTRIES = [
    {
      // 50-й ребёнок третьего контейнера
      name: "el50",
      selectors: ["div:nth-child(3) > div:nth-child(50)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 49, // 0-based
      scenarios: {
        "2": {
          targets:  [
         { left: 7, top: 192 }, { left: 562, top: 192 }
          ],
          percents: [
           { left: 4, top: 52}, { left: 78.5, top: 52}
          ]
        },
        "3": {
          targets:  [
           { left: 27, top: 102 }, { left: 285, top: 341 }, { left: 543, top: 102 }
          ],
          percents: [
             { left: 4, top: 52 }, {  left: 41, top:77 }, { left: 78.5, top: 52 }
          ]
        },

         "4": {
           targets:  [
           { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 543, top: 282 }, { left: 543, top: 102 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52}, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },


         "5": {
           targets:  [
           { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 285, top: 341 }, { left: 543, top: 282 }, { left: 543, top: 102 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52},{ left: 41, top:77 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
         "6": {
           targets:  [
           { left: 166, top: 52 }, { left: 7, top: 192 }, { left: 166, top: 341 }, { left: 403, top: 341 }, { left: 562, top: 192 }, { left: 403, top: 52 }
          ],
          percents: [
            { left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
         "7": {
           targets:  [
           { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 }, { left: 285, top: 341 },  { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 },{ left: 41, top:77 }, { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
              "8": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 166, top: 341 },   
           { left: 403, top: 341 }, { left: 543, top: 282 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
        "9": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 },  
            { left: 285, top: 341 },
           { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 41, top:77 },
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
       
      }
    },
    {
      
      name: "el62",
      selectors: ["div:nth-child(3) > div:nth-child(62)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 61,
      scenarios: {
        "2": {
          targets:  [
           { left: 7, top: 192 }, { left: 562, top: 192 }
          ],
          percents: [
          { left: 4, top: 52 }, { left: 78.5, top: 52 }
          ]
        },
       "3": {
          targets:  [
           { left: 27, top: 102 }, { left: 285, top: 341 }, { left: 543, top: 102 }
          ],
          percents: [
          { left: 4, top: 52 }, {  left: 41, top:77 }, { left: 78.5, top: 52 }
          ]
        },


        "4": {
          targets:  [
           { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 543, top: 282 }, { left: 543, top: 102 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52}, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },

         "5": {
             targets:  [
           { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 285, top: 341 }, { left: 543, top: 282 }, { left: 543, top: 102 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52},{ left: 41, top:77 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
         "6": {
           targets:  [
           { left: 166, top: 52 }, { left: 7, top: 192 }, { left: 166, top: 341 }, { left: 403, top: 341 }, { left: 562, top: 192 }, { left: 403, top: 52 }
          ],
          percents: [
            { left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
         "7": {
           targets:  [
           { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 }, { left: 285, top: 341 },  { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 },{ left: 41, top:77 }, { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
               "8": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 166, top: 341 },   
           { left: 403, top: 341 }, { left: 543, top: 282 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
        "9": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 },  
            { left: 285, top: 341 },
           { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 41, top:77 },
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
       
      }
    },

     {
      
      name: "el74",
      selectors: ["div:nth-child(3) > div:nth-child(74)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 73,
      scenarios: {
      
       "3": {
          targets:  [
           { left: 27, top: 102 }, { left: 285, top: 341 }, { left: 543, top: 102 }
          ],
          percents: [
          { left: 4, top: 52 }, {  left: 41, top:77 }, { left: 78.5, top: 52 }
          ]
        },

         "4": {
          targets:  [
           { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 543, top: 282 }, { left: 543, top: 102 }
          ],
          percents: [
          { left: 6, top: 30}, { left: 4, top:52}, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
         "5": {
             targets:  [
          { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 285, top: 341 }, { left: 543, top: 282 }, { left: 543, top: 102 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52},{ left: 41, top:77 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
         "6": {
           targets:  [
           { left: 166, top: 52 }, { left: 7, top: 192 }, { left: 166, top: 341 }, { left: 403, top: 341 }, { left: 562, top: 192 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
         "7": {
           targets:  [
           { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 }, { left: 285, top: 341 },  { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 },{ left: 41, top:77 }, { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
              "8": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 166, top: 341 },   
           { left: 403, top: 341 }, { left: 543, top: 282 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
        "9": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 },  
            { left: 285, top: 341 },
           { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 41, top:77 },
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
       
      }
    },
     {
      
      name: "el86",
      selectors: ["div:nth-child(3) > div:nth-child(86)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 85,
      scenarios: {  
     

         "4": {
          targets:  [
           { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 543, top: 282 }, { left: 543, top: 102 }
          ],
          percents: [
          { left: 6, top: 30}, { left: 4, top:52}, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
         "5": {
             targets:  [
           { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 285, top: 341 }, { left: 543, top: 282 }, { left: 543, top: 102 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52},{ left: 41, top:77 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
         "6": {
           targets:  [
           { left: 166, top: 52 }, { left: 7, top: 192 }, { left: 166, top: 341 }, { left: 403, top: 341 }, { left: 562, top: 192 }, { left: 403, top: 52 }
          ],
          percents: [
            { left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
         "7": {
           targets:  [
           { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 }, { left: 285, top: 341 },  { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 },{ left: 41, top:77 }, { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
              "8": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 166, top: 341 },   
           { left: 403, top: 341 }, { left: 543, top: 282 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
        "9": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 },  
            { left: 285, top: 341 },
           { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 41, top:77 },
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
       
      }
    },
     {
      
      name: "el98",
      selectors: ["div:nth-child(3) > div:nth-child(98)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 97,
      scenarios: {  
       
         "5": {
           targets:  [
           { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 285, top: 341 }, { left: 543, top: 282 }, { left: 543, top: 102 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52},{ left: 41, top:77 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
         "6": {
           targets:  [
           { left: 166, top: 52 }, { left: 7, top: 192 }, { left: 166, top: 341 }, { left: 403, top: 341 }, { left: 562, top: 192 }, { left: 403, top: 52 }
          ],
          percents: [
            { left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
         "7": {
           targets:  [
           { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 }, { left: 285, top: 341 },  { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 },{ left: 41, top:77 }, { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
              "8": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 166, top: 341 },   
           { left: 403, top: 341 }, { left: 543, top: 282 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
        "9": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 },  
            { left: 285, top: 341 },
           { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 41, top:77 },
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
       
      }
    },
     {
      
      name: "el110",
      selectors: ["div:nth-child(3) > div:nth-child(110)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 109,
      scenarios: {  
       
         "6": {
           targets:  [
           { left: 166, top: 52 }, { left: 7, top: 192 }, { left: 166, top: 341 }, { left: 403, top: 341 }, { left: 562, top: 192 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
         "7": {
           targets:  [
           { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 }, { left: 285, top: 341 },  { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 },{ left: 41, top:77 }, { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
               "8": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 166, top: 341 },   
           { left: 403, top: 341 }, { left: 543, top: 282 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
        "9": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 },  
            { left: 285, top: 341 },
           { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 41, top:77 },
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
       
      }
    },
     {      
      name: "el122",
      selectors: ["div:nth-child(3) > div:nth-child(122)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 121,
      scenarios: {  
       
         "7": {
           targets:  [
           { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 }, { left: 285, top: 341 },  { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }
          ],
          percents: [
           { left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 },{ left: 41, top:77 }, { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30}
          ]
        },
         "8": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 166, top: 341 },   
           { left: 403, top: 341 }, { left: 543, top: 282 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
        "9": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 },  
            { left: 285, top: 341 },
           { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 41, top:77 },
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
       
      }
    },
     {      
      name: "el134",
      selectors: ["div:nth-child(3) > div:nth-child(134)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 133,
      scenarios: {  
       
         "8": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 27, top: 282 }, { left: 166, top: 341 },   
           { left: 403, top: 341 }, { left: 543, top: 282 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 },          
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
        "9": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 },  
            { left: 285, top: 341 },
           { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 41, top:77 },
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
       
      }
    },
     {      
      name: "el146",
      selectors: ["div:nth-child(3) > div:nth-child(146)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 145,
      scenarios: {  
       
         "9": {
           targets:  [
           { left: 166, top: 52 }, { left: 27, top: 102 }, { left: 7, top: 192 }, { left: 27, top: 282 },  
            { left: 285, top: 341 },
           { left: 543, top: 282 }, { left: 562, top: 192 }, { left: 543, top: 102 }, { left: 403, top: 52 }
          ],
          percents: [
           { left: 14, top: 15},{ left: 6, top: 30}, { left: 4, top:52},{ left: 5, top:68 }, 
           { left: 41, top:77 },
           { left: 77, top:68 }, { left: 78.5, top: 52 }, { left: 76, top: 30},{ left: 69, top:15 }
          ]
        },
       
      }
    },
   {
   
      name: "dealers",
      selectorsAll: [".dealer"],
      parentSelector: "div:nth-child(3)",
      scenarios: {
      
        "2": {
          targets:  [
            { left: 533, top: 212 },   // примерная «стартовая» позиция дилера
            { left: 145, top: 212}    // при необходимости добавляй ещё
          ],
          percents: [
            { left: 66,  top: 49},    // проценты для совпадения с targets[0]
            { left: 27,  top: 47 }     // проценты для совпадения с targets[1]
          ]
        },

        "3": {
          targets:  [
            { left: 516, top: 137 },   
            { left: 260, top: 314 },   
            { left: 162, top: 137 },   
               
          ],
          percents: [
            { left: 66,  top: 49},   
            { left: 48,  top: 69}, 
            { left: 30,  top: 49},  
                
          ]
        },
        "4": {
          targets:  [
            { left: 516, top: 137 },   
            { left: 516, top: 276 },   
            { left: 162, top: 276 },   
            { left: 162, top: 137 },   
               
          ],
          percents: [
            { left: 66,  top: 25},   
            { left: 66,  top: 47},   
            { left: 30,  top: 47}, 
            { left: 30,  top: 25},  
                
          ]
        },

        "5": {
          targets:  [
            { left: 516, top: 137 },   
            { left: 516, top: 276 },   
            { left: 260, top: 314 },   
            { left: 162, top: 276 },   
            { left: 162, top: 137 },   
               
          ],
          percents: [
            { left: 66,  top: 25},   
            { left: 66,  top: 47}, 
            { left: 48,  top: 69}, 
            { left: 30,  top: 47}, 
            { left: 30,  top: 25},  
                
          ]
        },

         "6": {
          targets:  [
            { left: 375, top: 74 },   
            { left: 533, top: 212 },   
            { left: 375, top: 323 },  
            { left: 303, top: 323 },   
            { left: 145, top: 212 },   
            { left: 303, top: 74 },   
               
          ],
          percents: [
            { left: 66,  top: 15},  
            { left: 66,  top: 25},   
            { left: 66,  top: 47},            
            { left: 30,  top: 47}, 
            { left: 30,  top: 25},  
            { left: 30,  top: 15}, 
                
          ]
        },
        
      }
    }
  ];
   const TOL = 2;                 // допуск сравнения (px)
  const MIN_REAPPLY_MS = 80;     // антидребезг
  const START_RETRIES = 60;      // стартовые попытки
  const RETRY_DELAY = 100;       // мс между попытками
  const POLL_EVERY_MS = 80;      // rAF-проверка
  const PURE_HIDE_ONLY = true;   // только «чистые» hide (ровно один класс 'hide', без id)
  const DIRECT_ONLY = true;      // .sp_graphic как ПРЯМОЙ ребёнок (true) или любой потомок (false)

  // ====== УТИЛИТЫ ======

  const px = v => (typeof v === "string" && v.endsWith("px")) ? parseFloat(v) : NaN;
  const closeTo = (a,b,tol=TOL) => Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<=tol;

  function isPureHide(el) {
    if (!el || el.nodeType !== 1) return false;
    if (el.id) return false;
    const cl = el.classList;
    return cl && cl.length === 1 && cl.contains("hide");
  }

  function hasSpGraphic(el) {
    if (!el) return false;
    if (DIRECT_ONLY) {
      for (const child of el.children) {
        if (child.classList && child.classList.contains("sp_graphic")) return true;
      }
      return false;
    } else {
      return !!el.querySelector(".sp_graphic");
    }
  }

  // «целевой» hide = .hide (+ чистота при PURE_HIDE_ONLY) + наличие sp_graphic
  function isTargetHide(el) {
    if (!el || !el.classList || !el.classList.contains("hide")) return false;
    if (PURE_HIDE_ONLY && !isPureHide(el)) return false;
    return hasSpGraphic(el);
  }

  function readPosComputed(el) {
    const cs = getComputedStyle(el);
    const l = px(cs.left), t = px(cs.top);
    if (Number.isFinite(l) && Number.isFinite(t)) {
      return { left: Math.round(l), top: Math.round(t), method: "computed-px" };
    }
    return { left: NaN, top: NaN, method: "computed-auto" };
  }
  function readPosRect(el) {
    const rect = el.getBoundingClientRect();
    const parent = el.offsetParent || el.parentElement || document.documentElement;
    const pr = parent.getBoundingClientRect ? parent.getBoundingClientRect() : { left:0, top:0 };
    return { left: Math.round(rect.left - pr.left), top: Math.round(rect.top - pr.top), method: "rect-relative" };
  }
  function readPos(el) {
    const a = readPosComputed(el);
    if (Number.isFinite(a.left) && Number.isFinite(a.top)) return a;
    return readPosRect(el);
  }

  function ensureAbsoluteAtCurrent(el) {
    const cs = getComputedStyle(el);
    if (cs.position === "" || cs.position === "static" || cs.position === "relative") {
      const base = readPos(el);
      el.style.position = "absolute";
      if (Number.isFinite(base.left) && Number.isFinite(base.top)) {
        el.style.left = base.left + "px";
        el.style.top  = base.top  + "px";
        log("init absolute @", base, el);
      }
    }
  }

  // считаем только «целевые» hide (hide + sp_graphic + фильтры)
  function countTargetHides(scopeEl) {
    const root = scopeEl || document;
    let n = 0;
    root.querySelectorAll(".hide").forEach(el => {
      if (isTargetHide(el)) {
        const cs = getComputedStyle(el);
        if (cs.display !== "none") n++;
      }
    });
   
    return n;
  }

  function pickScenario(entry) {
    const parent = entry.parentSelector ? document.querySelector(entry.parentSelector) : document;
    const cnt = countTargetHides(parent);
    const map = entry.scenarios || {};
    const chosen = map[String(cnt)] || map["default"];
    
    return chosen || null; 
  }

  function matchTargetIndex(pos, targets) {
    for (let i = 0; i < targets.length; i++) {
      const t = targets[i];
      if (closeTo(pos.left, t.left) && closeTo(pos.top, t.top)) return i;
    }
    return -1;
  }

  function setPercent(el, perc) {
    if (perc.left != null) el.style.left = perc.left + "%";
    if (perc.top  != null) el.style.top  = perc.top  + "%";
  }

  function applyPercentForIndex(el, entry, idx, percents) {
    if (idx < 0 || idx >= percents.length) return false;

    const last = Number(el.dataset._watchPctAt || 0);
    if (Date.now() - last < MIN_REAPPLY_MS) return false;

    ensureAbsoluteAtCurrent(el);
    el.dataset._watchPctLock = "1";
    setPercent(el, percents[idx]);
    el.dataset._watchPctAt = String(Date.now());
    log("SET%", entry.name, "idx", idx, "=>", percents[idx]);

    setTimeout(() => { delete el.dataset._watchPctLock; }, MIN_REAPPLY_MS);
    return true;
  }

  function processOnChange(el, entry) {
    if (!el || el.dataset._watchPctLock) return;

    // если это .hide — применяем строгую проверку: только hide с дочерним .sp_graphic
    if (el.classList && el.classList.contains("hide") && !isTargetHide(el)) return;

    const cs = getComputedStyle(el);
    if (cs.display === "none") return;

    const scenario = pickScenario(entry);
    if (!scenario) return;
    const { targets, percents } = scenario;
    if (!targets || !percents || percents.length !== targets.length) return;

    const pos = readPos(el);
    const idx = matchTargetIndex(pos, targets);
    if (idx >= 0) applyPercentForIndex(el, entry, idx, percents);
  }

  // кандидаты для entry
  function getCandidates(entry) {
    const set = new Set();

    // множественные селекторы (.dealer)
    if (entry.selectorsAll && Array.isArray(entry.selectorsAll)) {
      entry.selectorsAll.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => set.add(el));
      });
    }

    // одиночные селекторы
    if (entry.selectors && Array.isArray(entry.selectors)) {
      for (const sel of entry.selectors) {
        const el = document.querySelector(sel);
        if (el) set.add(el);
      }
    }

    // parent + index
    if (entry.parentSelector != null && Number.isInteger(entry.childIndex)) {
      const parent = document.querySelector(entry.parentSelector);
      if (parent) {
        const kids = Array.from(parent.children);
        const el = kids[entry.childIndex];
        if (el) set.add(el);
      }
    }

    return Array.from(set);
  }

  function attachObservers(el, entry) {
    if (!el || el._watchPctAttached) return;
    el._watchPctAttached = true;

    const mo = new MutationObserver(() => processOnChange(el, entry));
    mo.observe(el, { attributes: true, attributeFilter: ["style", "class"] });

    let lastTick = 0;
    function tick(ts) {
      if (!document.body.contains(el)) return;
      if (ts - lastTick >= POLL_EVERY_MS) {
        lastTick = ts;
        processOnChange(el, entry);
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function bootstrapEntry(entry) {
    let tries = 0;
    const tryFind = () => {
      const els = getCandidates(entry);
      if (els.length) {
        els.forEach(el => {
          processOnChange(el, entry);
          attachObservers(el, entry);
        });
        return;
      }
      if (++tries < START_RETRIES) setTimeout(tryFind, RETRY_DELAY);
      else log("not found:", entry.name, entry.selectorsAll || entry.selectors || entry.parentSelector);
    };
    tryFind();
  }

  // следим за динамическими добавлениями
  const bodyObs = new MutationObserver(muts => {
    for (const m of muts) {
      for (const n of m.addedNodes) {
        if (n.nodeType !== 1) continue;
        ENTRIES.forEach(entry => {
          // множественные
          entry.selectorsAll?.forEach(sel => {
            if (n.matches?.(sel)) { processOnChange(n, entry); attachObservers(n, entry); }
            n.querySelectorAll?.(sel).forEach(el => { processOnChange(el, entry); attachObservers(el, entry); });
          });
          // одиночные
          entry.selectors?.forEach(sel => {
            if (n.matches?.(sel)) { processOnChange(n, entry); attachObservers(n, entry); }
            n.querySelectorAll?.(sel).forEach(el => { processOnChange(el, entry); attachObservers(el, entry); });
          });
          // parent + index
          if (entry.parentSelector && n.matches?.(entry.parentSelector)) {
            const kids = Array.from(n.children);
            const el = kids[entry.childIndex];
            if (el) { processOnChange(el, entry); attachObservers(el, entry); }
          }
        });
      }
    }
  });
  bodyObs.observe(document.body, { childList:true, subtree:true });

  // запуск
  ENTRIES.forEach(bootstrapEntry);
});