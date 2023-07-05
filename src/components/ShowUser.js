import React from "react";

class ShowUser extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map((user, index) => {
          return (
            <ul key={user.id}>
              <li>User ID: {user.id}</li>
              <li>Ime i prezime: {user.name}</li>
              <li>Godine: {user.years}</li>
              <button onClick={() => this.props.onUserDelete(index)}>
                Briši
              </button>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default ShowUser;

// import React from "react";

// class ShowUsers extends React.Component {
//   render() {
//     return (
//       <div>
//         <table border="1">
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Ime i prezime</th>
//               <th>Godine</th>
//               <th>Brisanje</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.users.map((user, index) => {
//               return (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.years}</td>
//                   <td>
//                     <button onClick={() => this.props.onUserDelete(index)}>
//                       Briši
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default ShowUsers;
