import React from 'react';
import './App.css';

const initialProductList = [
  { id: 1, name: 'produit 1', price: 50, quantity: 1 },
  { id: 2, name: 'produit 2', price: 75, quantity: 2 },
  { id: 3, name: 'produit 3', price: 20, quantity: 5 }
];

class App extends React.Component {
  
  state = {initialProductList}


  handleChange = (e) => {
    return e.target.value
    // console.log(e.target.value)
    // console.log(this.state.initialProductList)
    // console.log(...this.state.initialProductList)
    // console.log({ ...this.state.initialProductList[id], quantity : e.target.value})
    // this.setState({ initialProductList: { ...this.state.initialProductList, quantity : e.target.value}})
  }

  changement = (id) => {
    console.log({ ...this.state.initialProductList[id], quantity : this.handleChange})
    // this.setState({ initialProductList: { ...this.state.initialProductList, quantity : this.handleChange}})
  }

  

  render(){return (
    <div className='App'>
      <h1>Ma commande</h1>
      <table>
        <thead>
            <tr>
                <th>Produit</th>
                <th>Prix unitaire</th>
                <th>Quantité</th>
                <th>Prix total</th>
            </tr>
        </thead>
        <tbody>
        {this.state.initialProductList.map (product => (
          <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td><input type="number" value={product.quantity} onChange={this.changement}/></td>
              <td>{product.quantity * product.price} </td>
          </tr>
            ))}

        </tbody>
</table>
    </div>
  );}
  
}

export default App;


