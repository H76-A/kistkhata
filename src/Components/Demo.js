import {React , useState ,useEffect} from 'react'


// FireStore imports

import { db } from "../Components/Firebase/Config.js"
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";



export default function Demo() {

    //firebase Fetching Data from Firestore
    // Customer
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const ref = collection(db, "Customer");
    getDocs(ref).then((snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
        setCustomers(result);
    });
  }, [customers]);

 

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    await addDoc(collection(db, "Customer"), {
      cusName: "Anees Hanif",
      cnic:234324,
      cusAddr:"younisbad",
      cusCellNum:"0313313131",
      garName:"h20",
      garAddr:"water",
      garCellNum:5135,

  
    });
  };

// Vender 
const [venders, setVenders] = useState([]);

useEffect(() => {
  const ref = collection(db, "Vender");
  getDocs(ref).then((snapshot) => {
    let result = [];
    snapshot.docs.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });
      setVenders(result);
  });
}, [venders]);


  const handleVender = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "Vender"), {
       name:'zand sar',
       addr:'insan k oper wala hissa',
      item:'pta nai',
      price:2500000
  
    });
  };

  // For Item REcord ********************

  const [itemRecords , setItemRecords] = useState([]);

  useEffect(() => {
    const ref = collection(db, "ItemRecord");
    getDocs(ref).then((snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
        setItemRecords(result);
    });
  }, [itemRecords]);



  const handleItemRecord = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "ItemRecord"), {
        itemNum:'pta nai from vender',
        price:'from vender',
        cusNic:'from Customer ',
        paymentSchedule:'daily',
        allowanceGiven:'No'
  
    });
  };

  return (
    <div>
      <div>
      
        <h1>Custommer Fileds</h1>
        {
            customers.map((customer) =>{
                return(
                  <div key={customer.id}>
                    <h1>......................</h1>
                    <p>{customer.cusName}</p>
                    <p>{customer.cnic}</p>
                    <p>{customer.cusCellNum}</p>
                    <p>{customer.cusAddr}</p>
                    <p>{customer.garName}</p>
                    <p>{customer.garCellNum}</p>
                    <p>{customer.garAddr}</p>
                  </div>
                
                )
            })
        }
        </div>
        <div>
          <p>Adding Customer Details </p>

          <button onClick={handleSubmit}> add</button>
        </div>
        

        <div>
          <h3>.........................</h3>
          <h3>For Venders</h3>
          {
            venders.map((vender)=>{
              return(
                <div key={vender.id}>
                  <h3>----------------</h3>
                <p>{vender.name}</p>
                <p>{vender.addr}</p>
                <p>{vender.item}</p>
                <p>{vender.price}</p>
                </div>
              )
            })
          }
        </div>
        <div>
          <h3>Adding Venders Data</h3>
          <button onClick={handleVender}> add Vender</button>
        </div>


        <div>
          <h3>For Item Records</h3>
          {
              itemRecords.map(itemRecord=>{
                return(
                  <div>
                    <p>{itemRecord.itemNum}</p>
                    <p>{itemRecord.cusNic}</p>
                    <p>{itemRecord.price}</p>
                    <p>{itemRecord.paymentSchedule.daily}</p>
                    <p>{itemRecord.remaningAmount}</p>
                    <p>{itemRecord.itemNum}</p>
                    <p>{itemRecord.allowanceGiven}</p>
                    </div>
                )
              })
          }
          <div>
            <h3>Adding Item REcord</h3>
            <button onClick={handleItemRecord}> Add Item REcord</button>
          </div>
        </div>
    </div>
  )
}
