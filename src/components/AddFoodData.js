import React, { useState } from 'react'
import './AddFoodData.css'
import { db, storage } from '../components/Firebase/FirebaseConfig'
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Navbar from './Navbar';

const AddFoodData = () => {

    const[data,setData] = useState({
        foodName:'',
        foodPrice:'',
        foodCategory:'',
        foodDescription:'',
        restaurantName:'',
        restaurantPhone:'',
        foodType:'',
        mealType:'',
        foodAddon:'',
        foodAddonPrice:'',
        restaurantEmail:'',
        restrauntAddressBuilding:'',
        restrauntAddressStreet:'',
        restrauntAddressCity:'',
        reatrauntAddressPincode:'',
        foodImage:''
    });
   console.log(data.foodImage.name);
   
    const handleSubmit = (e) => {
        e.preventDefault()

        if (data.foodImage == null) {
            alert('Please select an image')
            return
        }

        else {
            const imageRef = ref(storage, `FoodImages/${data.foodImage.name}`)
            uploadBytes(imageRef, data.foodImage)
                .then(() => {
                    alert('Image uploaded successfully')
                    getDownloadURL(imageRef)
                        .then((url) => {
                            // console.log(url)
                            // setFoodImageUrl(url)

                            const foodData = {
                                foodName:data.foodName,
                                foodPrice:data.foodPrice,
                                foodImageUrl: url,
                                foodCategory:data.foodCategory,
                                foodDescription:data.foodDescription,
                                restaurantName:data.restaurantName,
                               
                                restaurantPhone:data.restaurantPhone,
                                
                                foodType:data.foodType,
                                mealType:data.mealType,
                                foodAddon:data.foodAddon,
                                foodAddonPrice:data.foodAddonPrice,
                                restaurantEmail:data.restaurantEmail,
                                restrauntAddressBuilding:data.restrauntAddressBuilding,
                                restrauntAddressStreet:data.restrauntAddressStreet,
                                restrauntAddressCity:data.restrauntAddressCity,
                                reatrauntAddressPincode:data.reatrauntAddressPincode,
                                id: new Date().getTime().toString()
                            }

                            // console.log(foodData)
                            try {
                                const docRef = addDoc(collection(db, "FoodData"), foodData);
                                alert("Data added successfully ", docRef.id);
                            }
                            catch (error) {
                                alert("Error adding document: ", error);
                            }
                        })
                })
                .catch((error) => {
                    alert(error.message)
                })
        }

    }


    // console.log(new Date().getTime().toString())
    return (
        <div className="food-outermost">
            <Navbar />
            <div className="form-outer">
                <h1>Add Food Data</h1>
                <form className="form-inner">
                    <label>Food Name</label>
                    <input type="text" name="food_name"
                        onChange={(e) => { setData((prev)=>({...prev,foodName:e.target.value})) }} />
                    <br />
                    <label>Food Description</label>
                    <input type="text" name="food_description"
                        onChange={(e) => {setData((prev)=>({...prev,foodDescription:e.target.value})) }} />
                    <br />

                    {/*                            */}
                    {/*  */}
                    {/*  */}


                    <div className="form-row">

                        <div className="form-col">
                            <label>Food Price</label>
                            <input type="number" name="food_price"
                                onChange={(e) => {setData((prev)=>({...prev,foodPrice:e.target.value}))}}
                            />
                        </div>
                        <div className="form-col">
                            <label>Food Type</label>

                            <select name="food_type" onChange={(e) => { setData((prev)=>({...prev,foodType:e.target.value})) }}>
                                <option value="null">Select Food Type</option>
                                <option value="veg">Veg</option>
                                <option value="non-veg">Non-Veg</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col">
                            <label>Food Category</label>
                            <select name="food_category" onChange={(e) => { setData((prev)=>({...prev,foodCategory:e.target.value})) }}>
                                <option value="null">Select Food Category</option>
                                <option value="Indian">Indian</option>
                                <option value="Chineese">Chineese</option>
                                <option value="Italian">Italian</option>
                                <option value="Mexican">Mexican</option>
                                <option value="American">American</option>
                            </select>
                        </div>
                        <div className="form-col">
                            <label>Meal Type</label>

                            <select name="meal_type" onChange={(e) => { setData((prev)=>({...prev,mealType:e.target.value})) }}>
                                <option value="null">Select Meal Type</option>
                                <option value="dinner">Dinner</option>
                                <option value="staters">Starters</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="liquid">Liquid</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <div class="form-row">
                        <div class="form-col">
                            <label>Add On</label>
                            <input type="text" name="food_addon"
                                onChange={(e) => { setData((prev)=>({...prev,foodAddon:e.target.value})) }}
                            />
                        </div>
                        <div className='form-col'>
                            <label>Add On Price</label>
                            <input type="text" name="food_addon_price"
                                onChange={(e) => { setData((prev)=>({...prev,foodAddonPrice:e.target.value})) }}
                            />
                        </div>
                    </div>
                    <br />
                    {/*  */}
                    {/*  */}
                    {/*                                          */}
                    <label>Food Image</label>
                    <input type="file" name="food_image"
                        onChange={(e) => { 
                            console.log(e.target.files[0])
                            setData((prev)=>({...prev,foodImage:e.target.files[0]})) }}
                    />
                    <br />
                    <label>Restaurant Name</label>
                    <input type="text" name="restaurant_name"
                        onChange={(e) => { setData((prev)=>({...prev,restaurantName:e.target.value})) }}
                    />
                    <br />
                    <div class="form-row">
                        <div class="form-col">
                            <label>Restaurant Building Number/Name</label>
                            <input type="text" name="restaurant_address_building"
                                onChange={(e) => { setData((prev)=>({...prev,restrauntAddressBuilding:e.target.value})) }}
                            />
                        </div>
                        <div class="form-col">
                            <label>Restaurant Street / Area Name</label>
                            <input type="text" name="restaurant_address_street"
                                onChange={(e) => { setData((prev)=>({...prev,restrauntAddressStreet:e.target.value})) }}
                            />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-col">
                            <label>Restaurant City</label>
                            <input type="text" name="restaurant_address_city"
                                onChange={(e) => { setData((prev)=>({...prev,restrauntAddressCity:e.target.value})) }}
                            />
                        </div>
                        <div class="form-col">
                            <label>Restaurant Pin-code</label>
                            <input type="number" name="restaurant_address_pincode"
                                onChange={(e) => { setData((prev)=>({...prev,reatrauntAddressPincode:e.target.value})) }}
                            />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-col">
                            <label>Restaurant Phone</label>
                            <input type="number" name="restaurant_phone"
                                onChange={(e) => { setData((prev)=>({...prev,restaurantPhone:e.target.value})) }}
                            />
                        </div>
                        <div class="form-col">
                            <label>Restaurant Email</label>
                            <input type="email" name="restaurant_email"
                                onChange={(e) => { setData((prev)=>({...prev,restaurantEmail:e.target.value})) }}
                            />
                        </div>
                    </div>
                    <br />
                    <button onClick={handleSubmit}>Add Food</button>
                </form>
            </div>
        </div>
    )
}

export default AddFoodData