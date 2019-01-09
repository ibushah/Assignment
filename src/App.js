import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  // CHART
  chart = [
    {
      id: 1,
      peepsID: '1',
      bookLikedID: '1',
    },
    {
      id: 2,
      peepsID: '2',
      bookLikedID: '1',
    },
    {
      id: 3,
      peepsID: '4',
      bookLikedID: '5',
    },
    {
      id: 4,
      peepsID: '5',
      bookLikedID: '2',
    },
    {
      id: 5,
      peepsID: '3',
      bookLikedID: '5',
    },
    {
      id: 6,
      peepsID: '6',
      bookLikedID: '4',
    },
  ];

  //   PEEEPS
  peeps = {
    1: {
      id: 1,
      name: 'Fazal Deen',
      readerCategory: 'champ',
    },
    2: {
      id: 2,
      name: 'Irfan',
      readerCategory: 'rising-star',
    },
    3: {
      id: 3,
      name: 'Muneeb',
      readerCategory: 'beginner',
    },
    4: {
      id: 4,
      name: 'Osama',
      readerCategory: 'champ',
    },
    5: {
      id: 5,
      name: 'Najam',
      readerCategory: 'champ',
    },
    6: {
      id: 6,
      name: 'Aamir',
      readerCategory: 'beginner',
    },
  };

  //   BOOKS

  books = {
    1: {
      id: 1,
      name: 'Imran Series',
    },
    2: {
      id: 2,
      name: 'Harry Potter',
    },
    3: {
      id: 3,
      name: 'I Am Malala',
    },
    4: {
      id: 4,
      name: 'Bang-e-Dara by Allama Iqbal',
    },
    5: {
      id: 5,
      name: 'Jokes 101',
    },
  };


  // print function

  print() {
    var ab = []
    this.chart.map((v, i) => {

     
      for(var k in this.peeps)
      {
        if(v.peepsID==this.peeps[k].id)
        {
      ab[i]=this.peeps[k].name;
      
        }
        
      }
      for(var kk in this.books)
      {
       
        if(v.bookLikedID==this.books[kk].id)
        {
          
          ab[i]+=" likes a "+this.books[kk].name;
        }
      }
    })
          return ab;
      }

render()
{
  

  return (
    <ul>
      {this.print().map((v,i) => <li key={i}>{v}</li>)}
    </ul>

  )
}
}

export default App;