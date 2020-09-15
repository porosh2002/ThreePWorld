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
        hovered_top: false,
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
                <Link className="drop-title" to="/product/topwear">
                  Topwear
                </Link>
                <Link className="drop-des" to="/product/shirts">
                  T-Shirt
                </Link>
                <Link className="drop-des" to="/product/casual shirts">
                  Casual Shirts
                </Link>
                <Link className="drop-des" to="/product/formal shirts">
                  Formal Shirts
                </Link>
                <Link className="drop-des" to="/product/shirts">
                  SweatShirts
                </Link>
                <Link className="drop-des" to="/product/jackets">
                  Jackets
                </Link>
                <Link className="drop-des" to="/product/Blazers Coats">
                  Blazers & Coats
                </Link>
                <Link className="drop-des" to="/product/sweaters">
                  Sweaters
                </Link>
                <Link className="drop-des" to="/product/suits">
                  Suits
                </Link>
                <Link className="drop-des" to="/product/rain jackets">
                  Rain Jackets
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/footwear">
                  Footwear
                </Link>
                <Link className="drop-des" to="/product/sport shoes">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="/product/casual shoes">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="/product/formal shoes">
                  Formal Shoes
                </Link>
                <Link className="drop-des" to="/product/sneakers">
                  Sneakers
                </Link>
                <Link className="drop-des" to="/product/sandales floaters">
                  Sandals & Floaters
                </Link>
                <Link className="drop-des" to="/product/flip flops">
                  Flip Flops
                </Link>
                <Link className="drop-des" to="/product/socks">
                  Socks
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/bottomwear">
                  Bottomwear
                </Link>
                <Link className="drop-des" to="/product/jeans">
                  Jeans
                </Link>
                <Link className="drop-des" to="/product/casual trousers">
                  Casual Trousers
                </Link>
                <Link className="drop-des" to="/product/formal trousers">
                  Formal Trousers
                </Link>
                <Link className="drop-des" to="/product/shorts">
                  Shorts
                </Link>
                <Link className="drop-des" to="/product/track pant joggers">
                  Track Pants & Joggers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/gadgets">
                  Gadgets
                </Link>
                <Link className="drop-des" to="/product/smart wearables">
                  Smart Wearables
                </Link>
                <Link className="drop-des" to="/product/fitness Gadgets">
                  Fitness Gadgets
                </Link>
                <Link className="drop-des" to="/product/headphones">
                  Headphones
                </Link>
                <Link className="drop-des" to="/product/speakers">
                  Speakers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/sports wear">
                  Sports Wear
                </Link>
                <Link className="drop-des" to="/product/sports shoes">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="/product/sports sandals">
                  Sports Sandals
                </Link>
                <Link className="drop-des" to="/product/active t-shirts">
                  Active T-Shirts
                </Link>
                <Link className="drop-des" to="/product/track pants and shorts">
                  Track Pants & Shorts
                </Link>
                <Link className="drop-des" to="/product/tracksuits">
                  Tracksuits
                </Link>
                <Link className="drop-des" to="/product/sport accessories">
                  Sports Accessories
                </Link>
                <Link className="drop-des" to="/product/Swimwear">
                  Swimwear
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/festive wear">
                  Festive Wear
                </Link>
                <Link className="drop-des" to="/product/sherwanis">
                  Sherwanis
                </Link>
                <Link className="drop-des" to="/product/dhotis">
                  Dhotis
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="/product/sleepwear">
                  Sleepwear
                </Link>
                <Link className="drop-des" to="/product/boxers">
                  Boxers
                </Link>
                <Link className="drop-des" to="/product/vest">
                  Vests
                </Link>
                <Link className="drop-des" to="/product/lounge">
                  Loungewear
                </Link>
                <Link className="drop-des" to="/product/thermals">
                  Thermals
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/fashion accessories">
                  Fashion Accessories
                </Link>
                <Link className="drop-des" to="/product/wallet">
                  Wallets
                </Link>
                <Link className="drop-des" to="/product/belt">
                  Belts
                </Link>
                <Link className="drop-des" to="/product/perfume">
                  Perfumes
                </Link>
                <Link className="drop-des" to="/product/cap hat">
                  Caps & Hats
                </Link>
                <Link className="drop-des" to="/product/phone case">
                  Phone Case
                </Link>
                <Link className="drop-des" to="/product/rings wristwear">
                  Rings & Wristwear
                </Link>
                <Link className="drop-des" to="/product/helmet">
                  Helmets
                </Link>
              </div>
  
              <div className="drop-div ">
                <Link className="drop-title drp-lst" to="/product/plus size">
                  Plus Size
                </Link>
                <Link className="drop-title drp-lst" to="/product/personal care">
                  Personal Care & Grooming
                </Link>
                <Link className="drop-title drp-lst" to="/product/sunglass frame">
                  Sunglasses & Frames
                </Link>
                <Link className="drop-title drp-lst" to="/product/watch">
                  Watches
                </Link>
                <Link className="drop-title drp-lst" to="/product/bag">
                  Bags & Backpacks
                </Link>
                <Link className="drop-title drp-lst" to="/product/luggage trolley">
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
                <Link className="drop-title" to="/product/western wear women">
                  Western Wear
                </Link>
                <Link className="drop-des" to="/product/dress women">
                  Dresses & Jumpsults
                </Link>
                <Link className="drop-des" to="/product/tops shirts women">
                  Tops,T-Shirts & Shirts
                </Link>
                <Link className="drop-des" to="/jeans women">
                  Jeans & Jeggings
                </Link>
                <Link className="drop-des" to="/product/ trousers women">
                  Trousers & Capris
                </Link>
                <Link className="drop-des" to="/product/shorts women">
                  Shorts & Skirts
                </Link>
                <Link className="drop-des" to="/product/shrugs women">
                  Shrugs
                </Link>
                <Link className="drop-des" to="/product/sweaters women">
                  Sweaters & Sweatshirts
                </Link>
                <Link className="drop-des" to="/product/jacket coat women">
                  Jackets & Coats
                </Link>
                <Link className="drop-des" to="/product/blazer women">
                  Blazers & Waistcoats
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/footwear women">
                  Footwear
                </Link>
                <Link className="drop-des" to="/product/women flats">
                  Flats
                </Link>
                <Link className="drop-des" to="/product/casual shoes women">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="/product/heel">
                  Heels
                </Link>
                <Link className="drop-des" to="/product/boot women">
                  Boots
                </Link>
                <Link className="drop-des" to="/product/sports shoes women">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="/product/women floaters">
                  Floaters
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/women sport wear">
                  Sports Wear
                </Link>
                <Link className="drop-des" to="/product/women clothing">
                  Clothing
                </Link>
                <Link className="drop-des" to="/product/sport accessories women">
                  Sports Accessories
                </Link>
                <Link className="drop-des" to="/product/sport equipment">
                  Shorts Equipment
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/gadget women">
                  Gadgets
                </Link>
                <Link className="drop-des" to="/product/smart wearales women">
                  Smart Wearables
                </Link>
                <Link className="drop-des" to="/product/fitness gadget women">
                  Fitness Gadgets
                </Link>
                <Link className="drop-des" to="/product/headphones">
                  Headphones
                </Link>
                <Link className="drop-des" to="/product/speakers">
                  Speakers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/beauty">
                  Beauty
                </Link>
                <Link className="drop-des" to="/product/makeup">
                  Makeup
                </Link>
                <Link className="drop-des" to="/product/skincare">
                  Skincare
                </Link>
                <Link className="drop-des" to="/product/premium beauty">
                  Premium Beauty
                </Link>
                <Link className="drop-des" to="/product/lipsticks">
                  Lipsticks
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/jewellery">
                  Jewellery
                </Link>
                <Link className="drop-des" to="/product/fashion jewellery">
                  Fashion Jewellery
                </Link>
                <Link className="drop-des" to="/product/fine jewellery">
                  Fine Jewellery
                </Link>
                <Link className="drop-des" to="/product/earrings">
                  Earrings
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="/product/BD fashion wear">
                  BD & Fusion Wear
                </Link>
                <Link className="drop-des" to="/product/kurtas">
                  Kurtas
                </Link>
                <Link className="drop-des" to="/product/tunics tops">
                  Kurtas , Tunics & Tops
                </Link>
                <Link className="drop-des" to="/product/ethnic dress">
                  Ethnic Dresses
                </Link>
                <Link className="drop-des" to="/product/leggings sakwars churidars">
                  Leggings , Sakwars & Churidars
                </Link>
                <Link className="drop-des" to="/product/skirts plazzos">
                  Skirts & Palazzos
                </Link>
                <Link className="drop-des" to="/product/sarress blouses">
                  Sarrees & Blouses
                </Link>
                <Link className="drop-des" to="/product/dress materials">
                  Dress Materials
                </Link>
                <Link className="drop-des" to="/product/lehenga cholis">
                  Lehenga Cholis
                </Link>
                <Link className="drop-des" to="/product/dupattas shawls">
                  Dupattas & Shawls
                </Link>
                <Link className="drop-des" to="/product/jackets waistcoats">
                  Jackets & Waistcoats
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/lingerie sleepwear">
                  Lingerie & Sleepwear
                </Link>
                <Link className="drop-des" to="/product/bra lingerie ">
                  Bras & Lingerie Sets
                </Link>
                <Link className="drop-des" to="/product/breief">
                  Briefs
                </Link>
                <Link className="drop-des" to="/product/shapewear">
                  Shapewear
                </Link>
                <Link className="drop-des" to="/product/swimwear">
                  Swimwear
                </Link>
                <Link className="drop-des" to="/product/camisoles thermals">
                  Camisoles & thermals
                </Link>
              </div>
  
              <div className="drop-div ">
                <Link className="drop-title drp-lst" to="/product/belt scarves">
                  Belts,Scarves & More
                </Link>
                <Link className="drop-title drp-lst" to="/product/watch">
                  Watches & Wearable
                </Link>
                <Link className="drop-title drp-lst" to="/product/sunglasses frames">
                  Sunglasses & Frames
                </Link>
                <Link className="drop-title drp-lst" to="/product/plus size">
                  Plus Size
                </Link>
                <Link className="drop-title drp-lst" to="/product/backpacks">
                  Backpacks
                </Link>
                <Link className="drop-title drp-lst" to="/product/luggages trolleys">
                  Luggages & Trolleys
                </Link>
                <Link className="drop-title drp-lst" to="/product/handbag bag wallet">
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
                <Link className="drop-title" to="/product/infant">
                  Infants
                </Link>
                <Link className="drop-des" to="/product/romper onsides">
                  Rompers & Onesies
                </Link>
                <Link className="drop-des" to="/product/clothing sets">
                  Clothing Sets
                </Link>
                <Link className="drop-des" to="/product/shirts tops">
                  Tshirt & Tops
                </Link>
                <Link className="drop-des" to="/product/dress">
                  Dresses
                </Link>
                <Link className="drop-des" to="/product/bottomwear">
                  Bottomwear
                </Link>
                <Link className="drop-des" to="/product/winter wear">
                  Winter Wear
                </Link>
                <Link className="drop-des" to="/product/inneraear sleepwear">
                  Innerwear & SleepWear
                </Link>
                <Link className="drop-des" to="/product/infants accessories">
                  Infants Accessories
                </Link>
              </div>
  
              <div className="drop-div">
                <Link className="drop-title" to="/product/boys footwear">
                  Boys Footwear
                </Link>
                <Link className="drop-des" to="/product/sports shoes">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="/product/casual shoes">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="/product/sandals">
                  Sandals
                </Link>
                <Link className="drop-des" to="/product/school shoes">
                  School Shoes
                </Link>
                <Link className="drop-des" to="/product/flip flop">
                  Flip Flops
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/girl footwear">
                  Girls Footwear
                </Link>
                <Link className="drop-des" to="/product/flats">
                  Flats
                </Link>
                <Link className="drop-des" to="/product/casual shoes">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="/product/hels">
                  Heels
                </Link>
                <Link className="drop-des" to="/product/flipflop">
                  Flip Flops
                </Link>
                <Link className="drop-des" to="/product/sandals">
                  Sandals
                </Link>
                <Link className="drop-des" to="/product/school shoes">
                  School Shoes
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/kids accessories">
                  Kids Accessories
                </Link>
                <Link className="drop-des" to="/product/bag bagpack">
                  Bags & Backpacks
                </Link>
                <Link className="drop-des" to="/product/watch">
                  Watches
                </Link>
                <Link className="drop-des" to="/product/jewellery">
                  Jewellery
                </Link>
                <Link className="drop-des" to="/product/eyewear">
                  Eyewear
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="/product/home bath">
                  Home & Bath
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="/product/girls clothing">
                  Girls Clothing
                </Link>
                <Link className="drop-des" to="/product/dresses">
                  Dresses
                </Link>
                <Link className="drop-des" to="/product/tops">
                  Tops
                </Link>
                <Link className="drop-des" to="/product/tshirts">
                  Tshirts
                </Link>
                <Link className="drop-des" to="/product/clothing set">
                  Clothing Sets
                </Link>
                <Link className="drop-des" to="/product/ethnic wear">
                  Ethnic Wear
                </Link>
                <Link className="drop-des" to="/product/dungarees jumsuits">
                  Dungarees & Jumpsuits
                </Link>
                <Link className="drop-des" to="/product/skirts shorts">
                  Skirts & Shorts
                </Link>
                <Link className="drop-des" to="/product/tight leggings">
                  Tight & Leggings
                </Link>
                <Link className="drop-des" to="/product/capris jeans trousers">
                  Jeans , Trousers & Capris
                </Link>
                <Link className="drop-des" to="/product/jacket,sweater,sweatshirts">
                  Jacket , Sweater ,Sweatshirts
                </Link>
                <Link className="drop-des" to="/product/innerwear sleepwear">
                  Innerwear & Sleepwear
                </Link>
              </div>
  
              <div className="drop-div">
                <Link className="drop-title" to="/product/boys clothing">
                  Boys Clothing
                </Link>
                <Link className="drop-des" to="/product/tsirts">
                  T-Shirt
                </Link>
                <Link className="drop-des" to="/product/shirts">
                  Shirts
                </Link>
                <Link className="drop-des" to="/product/shorts">
                  Shorts
                </Link>
                <Link className="drop-des" to="/product/jeans">
                  Jeans
                </Link>
                <Link className="drop-des" to="/product/trousers">
                  Trousers
                </Link>
                <Link className="drop-des" to="/product/clothing sets">
                  Clothing Sets
                </Link>
                <Link className="drop-des" to="/product/ethnic wear">
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
  