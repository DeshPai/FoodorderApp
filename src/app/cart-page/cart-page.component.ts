import { Component, OnInit } from '@angular/core';

import { CartService } from '../service/cart.service';
import { FoodService } from '../service/food/food.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  //paymentRequest!:google.payments.api.PaymentDataRequest ;
  isTop = window === window.top;

  
  
   //  end Google payment Gateway
  
  constructor(private cartService:CartService ) { 
    
    this.setcart();
  }

  ngOnInit(): void {
   
      //GooglePay  payment Integration 

      // this.paymentRequest = {
      //   apiVersion:2,
      //   apiVersionMinor: 0,
      //   allowedPaymentMethods: [
      //     {
      //       type: "CARD",
      //       parameters: {
      //         allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
      //         allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
      //       },
      //       tokenizationSpecification: {
      //         type: "PAYMENT_GATEWAY",
      //         parameters: {
      //           gateway: "example",
      //           gatewayMerchantId: "exampleGatewayMerchantId"
      //         }
      //       }
      //     }
      //   ],
      //   merchantInfo: {
      //     merchantId: "12345678901234567890",
      //     merchantName: "Demo Merchant"
      //   },
      //   transactionInfo: {
      //     totalPriceStatus: "FINAL",
      //     totalPriceLabel: "Total",
      //     totalPrice: "100.00",
      //     currencyCode: "USD",
      //     countryCode: "US"
      //   }
      // };
    
      
  }
  setcart(){
      this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItem){
   this.cartService.removeFromCart(cartItem.food.id);
   this.setcart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setcart();
  }
  // onLoadPaymentData(event: Event){
  //  const paymentData = (event as CustomEvent<google.payments.api.PaymentData>).detail;
  //   console.log("load payment data", paymentData);
  // }
  
}
