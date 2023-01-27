import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:Number):Foods{
   return this.getAllImages().find(food => food.id ==id) !;
  }
  
  getAllImages():Foods[]{
    return [
    {
    id : 1,
    price :20,
    name:'Pizza PaperRoni',
    favorite:true,
    star : 4.5,
    tags: ['FatFood','Pizza','Lunch'] ,
    imageUrl :'assets/images/Img1.jpg',
    cookTime : 20,
    origins :['Italy']
    },
    {
      id : 2,
      price :25,
      name:'MeatBall',
      favorite:true,
      star : 4,
      tags: ['Statters','Lunch'] ,
      imageUrl :'assets/images/Img2.jpg',
      cookTime : 25,
      origins :['Indian']
      },
      {
        id :3,
        price :15,
        name:'Meat-Burger',
        favorite:false,
        star : 2.5,
        tags: ['FastFood','Lunch','Burger'] ,
        imageUrl :'assets/images/Img3.jpg',
        cookTime : 20,
        origins :['Germany','US']
        },
        {
          id :4,
          price :10,
          name:'Veg-Burger',
          favorite:true,
          star : 4,
          tags: ['FastFood','Lunch','Burger'] ,
          imageUrl :'assets/images/Img4.jpg',
          cookTime : 15,
          origins :['Indian']
          },

          {
            id :5,
            price :5,
            name:'Pepper Masala French-Fry',
            favorite:true,
            star : 5,
            tags: ['FastFood','Stater'] ,
            imageUrl :'assets/images/Img5.jpg',
            cookTime : 10,
            origins :['France']
            },
            {
              id :6,
              price :8,
              name:'Veg Sweet Corn Soup',
              favorite:false,
              star : 3.5,
              tags: ['Soups','Stater'] ,
              imageUrl :'assets/images/Img6.jpg',
              cookTime : 10,
              origins :['India']
              },
              {
                id :7,
                price :10,
                name:'Mutton Shezwan Soup',
                favorite:false,
                star : 3,
                tags: ['Soups','Stater'] ,
                imageUrl :'assets/images/Img7.jpg',
                cookTime : 10,
                origins :['India','US']
                },
                {
                  id :8,
                  price :25,
                  name:'Classic Pepperoni  Chicken Pizza',
                  favorite:true,
                  star : 5,
                  tags: ['Pizza','Lunch'] ,
                  imageUrl :'assets/images/Img8.jpg',
                  cookTime : 15,
                  origins :['Italy','India']
                  },
                  {
                    id :9,
                    price :20,
                    name:'Paneer Butter Masala',
                    favorite:true,
                    star : 5,
                    tags: ['Buffet','Lunch'] ,
                    imageUrl :'assets/images/Img9.jpg',
                    cookTime : 25,
                    origins :['Italy']
                    },
                    {
                      id :10,
                      price :20,
                      name:'Chicken Dopyaza Masala',
                      favorite:true,
                      star : 5,
                      tags: ['Buffet','Lunch'] ,
                      imageUrl :'assets/images/Img10.jpg',
                      cookTime : 30,
                      origins :['Italy']
                      },
                      {
                        id :11,
                        price :15,
                        name:'Fried rice',
                        favorite:true,
                        star : 3.5,
                        tags: ['Buffet','Lunch'] ,
                        imageUrl :'assets/images/Img11.jpg',
                        cookTime :20,
                        origins :['India']
                        },
                        {
                          id :13,
                          price :35,
                          name:'Meatballs akçaabat Kofta',
                          favorite:true,
                          star : 4,
                          tags: ['Buffet','Lunch'] ,
                          imageUrl :'assets/images/Img13.jpg',
                          cookTime : 25,
                          origins :['Swedish']
                          },
                          {
                            id :14,
                            price :35,
                            name:' Stuffed chickenballs with spinach',
                            favorite:true,
                            star : 5,
                            tags: ['Buffet','Lunch'] ,
                            imageUrl :'assets/images/Img14.jpg',
                            cookTime : 20,
                            origins :['Indian','Singapoor']
                            },
                            {
                              id :15,
                              price :10,
                              name:'Chicken Shezwan Soup',
                              favorite:true,
                              star : 4.5,
                              tags: ['Soups','Stater'] ,
                              imageUrl :'assets/images/Img15.jpg',
                              cookTime : 15,
                              origins :['Continental']
                              },
                              {
                                id :17,
                                price :30,
                                name:'Chicken Tandoor',
                                favorite:true,
                                star : 5,
                                tags: ['Tandoor'] ,
                                imageUrl :'assets/images/Img17.jpg',
                                cookTime : 30,
                                origins :['India','Japan']
                                }
                  ];
         }

         getAllTag():Tag[]{
          return [
            {name:'All',count:15},
            {name:'FastFood',count:3},
            {name:'Pizza',count:2},
            {name:'Lunch',count:6},
            {name:'Soups',count:3},
            {name:'Stater',count:4},
            {name:'Burger',count:2},
            {name:'Tandoor',count:1},
          ]
         }

         getAllFoodByTag(tag:string):Foods[]{
         return tag == "All" ?
                     this.getAllImages(): this.getAllImages().filter(food=>food.tags?.
                     includes(tag));
                     console.log(tag);
           
          // if(tag =='All'){
          //   return this.getAllImages();
          //  }else{
          //   return this.getAllImages().filter(food=>food.tags?.includes(tag));
          //  }
         }

}
