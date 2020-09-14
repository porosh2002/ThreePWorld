import React,{Component} from 'react';
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import TopNav from './TopNav';
export default class Navigation extends Component {
    constructor() {
      super();
      this.state = {
        hovered: false,
        hovered_womwn: false,
        hovered_kid: false,
        hovered_home: false,
        hovered_essential: false,
        hovered_top: false,
      };
    }
    menu_div_out = () => {
      this.setState({
        hovered: false,
        hovered_womwn: false,
        hovered_home: false,
        hovered_kid: false,
        hovered_essential: false,
      });
    };
    men_mouseEnter = () => {
      this.setState({
        hovered: true,
        hovered_womwn: false,
        hovered_home: false,
        hovered_kid: false,
        hovered_essential: false,
      });
    };
    topc_mouseEnter = () => {
      this.setState({
        hovered:false,
        hovered_womwn: false,
        hovered_home: false,
        hovered_kid: false,
        hovered_essential: false,
        hovered_top:true,
      });
    };
    women_mouseEnter = () => {
      this.setState({
        hovered: false,
        hovered_womwn: true,
        hovered_home: false,
        hovered_kid: false,
        hovered_essential: false,
        hovered_top:false,
      });
    };
    kid_mouseEnter = () => {
      this.setState({
        hovered: false,
        hovered_womwn: false,
        hovered_home: false,
        hovered_kid: true,
        hovered_essential: false,
        hovered_top:false,
      });
    };
    home_mouseEnter = () => {
      this.setState({
        hovered: false,
        hovered_womwn: false,
        hovered_home: true,
        hovered_kid: false,
        hovered_essential: false,
        hovered_top:false,
      });
    };
    essential_mouseEnter = () => {
      this.setState({
        hovered: false,
        hovered_womwn: false,
        hovered_home: false,
        hovered_kid: false,
        hovered_essential: true,
        hovered_top:false,
      });
    };
    render() {
      const { hovered } = this.state;
      const { hovered_womwn } = this.state;
      const { hovered_kid } = this.state;
      const { hovered_home } = this.state;
      const { hovered_essential } = this.state;
      const { hovered_top } = this.state;
      const style = hovered ? { display: "block" } : {};
      const style2 = hovered_womwn ? { display: "block" } : {};
      const style3 = hovered_kid ? { display: "block" } : {};
      const style4 = hovered_home ? { display: "block" } : {};
      const style5 = hovered_essential ? { display: "block" } : {};
      const style6 = hovered_top ? { display: "block" } : {};
      return (
        <div className='nav--main' >
          <TopNav />
          <div className="navigation">
            <div className="logo_div" onMouseEnter={this.menu_div_out}>
              <Link to="/">
                <img className="App-logo" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="menu-div-main">
              <div
                className="menu-div-one"
                onMouseEnter={this.menu_div_out}
              ></div>
              <div className="menu-div">
                {/* men_link class removed */}
                <Link
                  className="menu-link "
                  
                  onMouseEnter={this.men_mouseEnter}
                >
                  Men
                </Link>
                <Link
                  className="menu-link"
                  
                  onMouseEnter={this.women_mouseEnter}
                >
                  Women
                </Link>
                <Link
                  className="menu-link"
                  
                  onMouseEnter={this.kid_mouseEnter}
                >
                  Kids
                </Link>
                <Link
                  className="menu-link"
                  
                  onMouseEnter={this.home_mouseEnter}
                >
                  Home & Living
                </Link>
                <Link
                  className="menu-link"
                  
                  onMouseEnter={this.essential_mouseEnter}
                >
                  Essentials
                </Link>
                <Link
                  className="menu-link"
                  
                  onMouseEnter={this.topc_mouseEnter}
                >
                  Top Category
                </Link>
              </div>
            </div>
            <div className="srch-profile" onMouseEnter={this.menu_div_out}>
              <div className="search-section">
                <form>
                  <label className="label">
                  <span class="fas fa-search"></span>
                    <input
                      className="search-box"
                      type="search"
                      placeholder="Search for..."
                    />
                  </label>
                </form>
              </div>
              <div className="pr-container">
                <Link to="/">
                  <div className="pre-container-link-div">
                  <i className="far fa-money-bill-alt"></i>
                    <p className="pr-container-des ">Make Money</p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="pre-container-link-div">
                  <i className="fas fa-bullhorn"></i>
                    <p className="pr-container-des ">Promotion</p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="pre-container-link-div">
                    <i className="fas fa-shopping-bag"></i>
                    <p className="pr-container-des">Cart</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            style={style}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddmf">
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Topwear
                </Link>
                <Link className="drop-des" to="/product">
                  T-Shirt
                </Link>
                <Link className="drop-des" to="/product">
                  Casual Shirts
                </Link>
                <Link className="drop-des" to="/product">
                  Formal Shirts
                </Link>
                <Link className="drop-des" to="/product">
                  SweatShirts
                </Link>
                <Link className="drop-des" to="/product">
                  Jackets
                </Link>
                <Link className="drop-des" to="/product">
                  Blazers & Coats
                </Link>
                <Link className="drop-des" to="/product">
                  Sweaters
                </Link>
                <Link className="drop-des" to="/product">
                  Suits
                </Link>
                <Link className="drop-des" to="/product">
                  Rain Jackets
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Footwear
                </Link>
                <Link className="drop-des" to="/product">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="/product">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="/product">
                  Formal Shoes
                </Link>
                <Link className="drop-des" to="/product">
                  Sneakers
                </Link>
                <Link className="drop-des" to="/product">
                  Sandals & Floaters
                </Link>
                <Link className="drop-des" to="/product">
                  Flip Flops
                </Link>
                <Link className="drop-des" to="/product">
                  Socks
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Bottomwear
                </Link>
                <Link className="drop-des" to="/product">
                  Jeans
                </Link>
                <Link className="drop-des" to="/product">
                  Casual Trousers
                </Link>
                <Link className="drop-des" to="/product">
                  Formal Trousers
                </Link>
                <Link className="drop-des" to="/product">
                  Shorts
                </Link>
                <Link className="drop-des" to="/product">
                  Track Pants & Joggers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Gadgets
                </Link>
                <Link className="drop-des" to="/product">
                  Smart Wearables
                </Link>
                <Link className="drop-des" to="/product">
                  Fitness Gadgets
                </Link>
                <Link className="drop-des" to="/product">
                  Headphones
                </Link>
                <Link className="drop-des" to="/product">
                  Speakers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Sports Wear
                </Link>
                <Link className="drop-des" to="/product">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="/product">
                  Sports Sandals
                </Link>
                <Link className="drop-des" to="/product">
                  Active T-Shirts
                </Link>
                <Link className="drop-des" to="/product">
                  Track Pants & Shorts
                </Link>
                <Link className="drop-des" to="/product">
                  Tracksuits
                </Link>
                <Link className="drop-des" to="/product">
                  Jackets & Sweatshirts
                </Link>
                <Link className="drop-des" to="/product">
                  Sports Accessories
                </Link>
                <Link className="drop-des" to="/product">
                  Swimwear
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Festive Wear
                </Link>
                <Link className="drop-des" to="/product">
                  Kurtas & Kurta Sets
                </Link>
                <Link className="drop-des" to="/product">
                  Sherwanis
                </Link>
                <Link className="drop-des" to="/product">
                  Nehru Jackets
                </Link>
                <Link className="drop-des" to="/product">
                  Dhotis
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Sleepwear
                </Link>
                <Link className="drop-des" to="/product">
                  Briefs & Trunks
                </Link>
                <Link className="drop-des" to="/product">
                  Boxers
                </Link>
                <Link className="drop-des" to="/product">
                  Vests
                </Link>
                <Link className="drop-des" to="/product">
                  SleepWear & Loungewear
                </Link>
                <Link className="drop-des" to="/product">
                  Thermals
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Fashion Accessories
                </Link>
                <Link className="drop-des" to="/product">
                  Wallets
                </Link>
                <Link className="drop-des" to="/product">
                  Belts
                </Link>
                <Link className="drop-des" to="/product">
                  Perfumes & Body Mists
                </Link>
                <Link className="drop-des" to="/product">
                  Trimmers
                </Link>
                <Link className="drop-des" to="/product">
                  Deodorants
                </Link>
                <Link className="drop-des" to="/product">
                  ties Cufflinks & Pocket Squares
                </Link>
                <Link className="drop-des" to="/product">
                  Accessory Gift Sets
                </Link>
                <Link className="drop-des" to="/product">
                  Caps & Hats
                </Link>
                <Link className="drop-des" to="/product">
                  Mufflers Scarves & Gloves
                </Link>
                <Link className="drop-des" to="/product">
                  Phone Case
                </Link>
                <Link className="drop-des" to="/product">
                  Rings & Wristwear
                </Link>
                <Link className="drop-des" to="/product">
                  Helmets
                </Link>
              </div>
  
              <div className="drop-div ">
                <Link className="drop-title drp-lst" to="/product">
                  Plus Size
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Personal Care & Grooming
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Sunglasses & Frames
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Watches
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Bags & Backpacks
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Luggages & Trolleys
                </Link>
              </div>
            </div>
          </div>
  
          <div
            style={style2}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddmf">
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Western Wear
                </Link>
                <Link className="drop-des" to="/product">
                  Dresses & Jumpsults
                </Link>
                <Link className="drop-des" to="/product">
                  Tops,T-Shirts & Shirts
                </Link>
                <Link className="drop-des" to="/product">
                  Jeans & Jeggings
                </Link>
                <Link className="drop-des" to="/product">
                  Trousers & Capris
                </Link>
                <Link className="drop-des" to="/product">
                  Shorts & Skirts
                </Link>
                <Link className="drop-des" to="/product">
                  Shrugs
                </Link>
                <Link className="drop-des" to="/product">
                  Sweaters & Sweatshirts
                </Link>
                <Link className="drop-des" to="/product">
                  Jackets & Coats
                </Link>
                <Link className="drop-des" to="/product">
                  Blazers & Waistcoats
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Footwear
                </Link>
                <Link className="drop-des" to="/product">
                  Flats
                </Link>
                <Link className="drop-des" to="/product">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="/product">
                  Heels
                </Link>
                <Link className="drop-des" to="/product">
                  Boots
                </Link>
                <Link className="drop-des" to="/product">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="/product">
                  Floaters
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Sports Wear
                </Link>
                <Link className="drop-des" to="/product">
                  Clothing
                </Link>
                <Link className="drop-des" to="/product">
                  Footwear
                </Link>
                <Link className="drop-des" to="/product">
                  Sports Accessories
                </Link>
                <Link className="drop-des" to="/product">
                  Shorts Equipmwnt
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Gadgets
                </Link>
                <Link className="drop-des" to="/product">
                  Smart Wearables
                </Link>
                <Link className="drop-des" to="/product">
                  Fitness Gadgets
                </Link>
                <Link className="drop-des" to="/product">
                  Headphones
                </Link>
                <Link className="drop-des" to="/product">
                  Speakers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Beauty
                </Link>
                <Link className="drop-des" to="/product">
                  Makeup
                </Link>
                <Link className="drop-des" to="/product">
                  Skincare
                </Link>
                <Link className="drop-des" to="/product">
                  Premium Beauty
                </Link>
                <Link className="drop-des" to="/product">
                  Lipsticks
                </Link>
                <Link className="drop-des" to="/product">
                  Fragrances
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Jewellery
                </Link>
                <Link className="drop-des" to="/product">
                  Fashion Jewellery
                </Link>
                <Link className="drop-des" to="/product">
                  Fine Jewellery
                </Link>
                <Link className="drop-des" to="/product">
                  Earrings
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Indian & Fusion Wear
                </Link>
                <Link className="drop-des" to="/product">
                  Kurtas
                </Link>
                <Link className="drop-des" to="/product">
                  Kurtas , Tunics & Tops
                </Link>
                <Link className="drop-des" to="/product">
                  Ethnic Dresses
                </Link>
                <Link className="drop-des" to="/product">
                  Leggings , Sakwars & Churidars
                </Link>
                <Link className="drop-des" to="/product">
                  Skirts & Palazzos
                </Link>
                <Link className="drop-des" to="/product">
                  Sarrees & Blouses
                </Link>
                <Link className="drop-des" to="/product">
                  Dress Materials
                </Link>
                <Link className="drop-des" to="/product">
                  Lehenga Cholis
                </Link>
                <Link className="drop-des" to="/product">
                  Dupattas & Shawls
                </Link>
                <Link className="drop-des" to="/product">
                  Jackets & Waistcoats
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Lingerie & Sleepwear
                </Link>
                <Link className="drop-des" to="/product">
                  Bras & Lingerie Sets
                </Link>
                <Link className="drop-des" to="/product">
                  Briefs
                </Link>
                <Link className="drop-des" to="/product">
                  Shapewear
                </Link>
                <Link className="drop-des" to="/product">
                  Sleepwear & Loungewear
                </Link>
                <Link className="drop-des" to="/product">
                  Swimwear
                </Link>
                <Link className="drop-des" to="/product">
                  Camisoles & thermals
                </Link>
              </div>
  
              <div className="drop-div ">
                <Link className="drop-title drp-lst" to="/product">
                  Belts,Scarves & More
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Watches & Wearable
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Sunglasses & Frames
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Plus Size
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Backpacks
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Luggages & Trolleys
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Handbags,Bags & Wallets
                </Link>
              </div>
            </div>
          </div>
  
          <div
            style={style3}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddmf">
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Infants
                </Link>
                <Link className="drop-des" to="/product">
                  Rompers & Onesies
                </Link>
                <Link className="drop-des" to="/product">
                  Clothing Sets
                </Link>
                <Link className="drop-des" to="/product">
                  Tshirt & Tops
                </Link>
                <Link className="drop-des" to="/product">
                  Dresses
                </Link>
                <Link className="drop-des" to="/product">
                  Bottomwear
                </Link>
                <Link className="drop-des" to="/product">
                  Winter Wear
                </Link>
                <Link className="drop-des" to="/product">
                  Innerwear & SleepWear
                </Link>
                <Link className="drop-des" to="/product">
                  Infants Accessories
                </Link>
              </div>
  
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Boys Footwear
                </Link>
                <Link className="drop-des" to="/product">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="/product">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="/product">
                  Sandals
                </Link>
                <Link className="drop-des" to="/product">
                  School Shoes
                </Link>
                <Link className="drop-des" to="/product">
                  Flip Flops
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Girls Footwear
                </Link>
                <Link className="drop-des" to="/product">
                  Flats
                </Link>
                <Link className="drop-des" to="/product">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="/product">
                  Heels
                </Link>
                <Link className="drop-des" to="/product">
                  Flip Flops
                </Link>
                <Link className="drop-des" to="/product">
                  Sandals
                </Link>
                <Link className="drop-des" to="/product">
                  School Shoes
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Kids Accessories
                </Link>
                <Link className="drop-des" to="/product">
                  Bags & Backpacks
                </Link>
                <Link className="drop-des" to="/product">
                  Watches
                </Link>
                <Link className="drop-des" to="/product">
                  Jewellery
                </Link>
                <Link className="drop-des" to="/product">
                  Eyewear
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Home & Bath
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Girls Clothing
                </Link>
                <Link className="drop-des" to="/product">
                  Dresses
                </Link>
                <Link className="drop-des" to="/product">
                  Tops
                </Link>
                <Link className="drop-des" to="/product">
                  Tshirts
                </Link>
                <Link className="drop-des" to="/product">
                  Clothing Sets
                </Link>
                <Link className="drop-des" to="/product">
                  Ethnic Wear
                </Link>
                <Link className="drop-des" to="/product">
                  Dungarees & Jumpsuits
                </Link>
                <Link className="drop-des" to="/product">
                  Skirts & Shorts
                </Link>
                <Link className="drop-des" to="/product">
                  Tight & Leggings
                </Link>
                <Link className="drop-des" to="/product">
                  Jeans , Trousers & Capris
                </Link>
                <Link className="drop-des" to="/product">
                  Jacket , Sweater ,Sweatshirts
                </Link>
                <Link className="drop-des" to="/product">
                  Innerwear & Sleepwear
                </Link>
              </div>
  
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Boys Clothing
                </Link>
                <Link className="drop-des" to="/product">
                  T-Shirt
                </Link>
                <Link className="drop-des" to="/product">
                  Shirts
                </Link>
                <Link className="drop-des" to="/product">
                  Shorts
                </Link>
                <Link className="drop-des" to="/product">
                  Jeans
                </Link>
                <Link className="drop-des" to="/product">
                  Trousers
                </Link>
                <Link className="drop-des" to="/product">
                  Clothing Sets
                </Link>
                <Link className="drop-des" to="/product">
                  Ethnic Wear
                </Link>
                <Link className="drop-des" to="/product">
                  Track Pants & Pyjamas
                </Link>
                <Link className="drop-des" to="/product">
                  Jackets , Sweater, Sweatshirts
                </Link>
                <Link className="drop-des" to="/product">
                  Innerwear & Sleepwear
                </Link>
              </div>
  
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Brands
                </Link>
                <Link className="drop-des" to="/product">
                  H&M
                </Link>
                <Link className="drop-des" to="/product">
                  United Colors of Benetton
                </Link>
                <Link className="drop-des" to="/product">
                  YK
                </Link>
                <Link className="drop-des" to="/product">
                  U.S. Polo Assn. Kids
                </Link>
                <Link className="drop-des" to="/product">
                  GAP Kids
                </Link>
                <Link className="drop-des" to="/product">
                  Gini & Jony
                </Link>
                <Link className="drop-des" to="/product">
                  Peppermint
                </Link>
                <Link className="drop-des" to="/product">
                  next
                </Link>
                <Link className="drop-des" to="/product">
                  Allen Solly Junior
                </Link>
                <Link className="drop-des" to="/product">
                  Nike
                </Link>
                <Link className="drop-des" to="/product">
                  Pepe Jeans
                </Link>
              </div>
            </div>
          </div>
  
          <div
            style={style4}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddmf">
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Brands
                </Link>
                <Link className="drop-des" to="/product">
                  Bombay Dyeing
                </Link>
                <Link className="drop-des" to="/product">
                  Spaces
                </Link>
                <Link className="drop-des" to="/product">
                  D Decor
                </Link>
                <Link className="drop-des" to="/product">
                  Portico New Work
                </Link>
                <Link className="drop-des" to="/product">
                  Pure Home & Living
                </Link>
                <Link className="drop-des" to="/product">
                  Swayam
                </Link>
                <Link className="drop-des" to="/product">
                  Raymond home
                </Link>
                <Link className="drop-des" to="/product">
                  Trident
                </Link>
                <Link className="drop-des" to="/product">
                  Story@Home
                </Link>
                <Link className="drop-des" to="/product">
                  Home Sparkle
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Bath
                </Link>
                <Link className="drop-des" to="/product">
                  Bath Towels
                </Link>
                <Link className="drop-des" to="/product">
                  Hand & Face Towels
                </Link>
                <Link className="drop-des" to="/product">
                  Beach Towels
                </Link>
                <Link className="drop-des" to="/product">
                  Towels Set
                </Link>
                <Link className="drop-des" to="/product">
                  Bath Rugs
                </Link>
                <Link className="drop-des" to="/product">
                  Bath Robes
                </Link>
                <Link className="drop-des" to="/product">
                  Bathroom Accessories
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Home Decor
                </Link>
                <Link className="drop-des" to="/product">
                  Plants & Planters
                </Link>
                <Link className="drop-des" to="/product">
                  Aromas & Candles
                </Link>
                <Link className="drop-des" to="/product">
                  Clocks
                </Link>
                <Link className="drop-des" to="/product">
                  Mirrors
                </Link>
                <Link className="drop-des" to="/product">
                  Wall Decor
                </Link>
                <Link className="drop-des" to="/product">
                  Wall Shelves
                </Link>
                <Link className="drop-des" to="/product">
                  Fountains
                </Link>
                <Link className="drop-des" to="/product">
                  ShowPieces & Vases
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Kitchen & Table
                </Link>
                <Link className="drop-des" to="/product">
                  Serveware
                </Link>
                <Link className="drop-des" to="/product">
                  Bar & Drinkware
                </Link>
                <Link className="drop-des" to="/product">
                  Cookware
                </Link>
                <Link className="drop-des" to="/product">
                  Kitchen Storage
                </Link>
                <Link className="drop-des" to="/product">
                  Table Cover
                </Link>
                <Link className="drop-des" to="/product">
                  Furnishings
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Storage
                </Link>
                <Link className="drop-des" to="/product">
                  Organisers
                </Link>
                <Link className="drop-des" to="/product">
                  Hooks & Holders
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Lamps & Lighting
                </Link>
                <Link className="drop-des" to="/product">
                  Floor Lamps
                </Link>
                <Link className="drop-des" to="/product">
                  Table Lamps
                </Link>
                <Link className="drop-des" to="/product">
                  Wall Laps
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="/product">
                  Flooring
                </Link>
                <Link className="drop-des" to="/product">
                  Carpets
                </Link>
                <Link className="drop-des" to="/product">
                  Mats & Dhurries
                </Link>
                <Link className="drop-des" to="/product">
                  Door Mats
                </Link>
              </div>
  
              <div className="drop-div ">
                <Link className="drop-title drp-lst" to="/product">
                  Bed Liner & Furnishing
                </Link>
                <Link className="drop-des" to="/product">
                  Bedsheets
                </Link>
                <Link className="drop-des" to="/product">
                  Bedding Sets
                </Link>
                <Link className="drop-des" to="/product">
                  Blamkets,Quilts & Dohars
                </Link>
                <Link className="drop-des" to="/product">
                  Pillows & Pillow Covers
                </Link>
                <Link className="drop-des" to="/product">
                  Bed Covers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title drp-lst" to="/product">
                  Cushions & Cushion Covers
                </Link>
              </div>
            </div>
          </div>
          <div
            style={style5}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddms">
              <div className="drop-div ">
                <Link className="drop-title drp-lst" to="/product">
                  Mask
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Skin Care
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Haircare
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Bath & Body
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Men's Grooming
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Baby Care
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  At Home Salon
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Hair Styling
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Appliances
                </Link>
              </div>
            </div>
          </div>
          <div
            style={style6}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddms">
              <div className="drop-div ">
                <Link className="drop-title drp-lst" to="/product">
                  Smart TV & Android TV
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Desktop
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Motor Bike
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Speaker
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Freezer
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Refrigerator
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Split AC
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Laptop
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Smart Phone
                </Link>
                <Link className="drop-title drp-lst" to="/product">
                  Microwave Oven
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  