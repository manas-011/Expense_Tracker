import React , {useState} from 'react' ;
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';

let DUMMY_EXPENSE = [
    {
        id : 'e1' , 
        title : 'School Fee',
        amount : 400 ,
        date : new Date(2021 , 5 , 12) 
    } ,

    {
        id : 'e2' , 
        title : 'Books',
        amount : 250 ,
        date : new Date(2021 , 7 , 21) 
    } ,

    {
        id : 'e3' , 
        title : 'House Rent',
        amount : 1000 ,
        date : new Date(2021 , 4 , 2) 
    } ,

    {
        id : 'e4' , 
        title : 'Food',
        amount : 600 , 
        date : new Date(2021 , 1 , 11) 
    }

] ;

const App = () =>{

    const [expenses , setExpenses] = useState(DUMMY_EXPENSE) ;

    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense ,...expenses] ;
         setExpenses(updatedExpense) ;
    } ;

    return  ( 
        <div>
            <h2 align='center'>Let's get started</h2>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <Expenses item = {expenses} ></Expenses>
        </div>
      
        
    );
}

export default App ;