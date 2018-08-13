// import { Tabs, WhiteSpace } from 'antd-mobile';
import React from 'react';
// const tabs = [
//   ,
// ];

// const TabExample = () => (
//   <div>
//     <WhiteSpace />
//     <div style={{ height: 44 }}>
//       <Tabs tabs={tabs}
//         initalPage={'t2'}
//       >
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//          1cm
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//           合作方
//         </div>
//       </Tabs>
//     </div>
//   </div>
// );
// export default class TabExamplea extends React.Component {
//     render() {
//         return <TabExample/>
//     }
// }
// ReactDOM.render(<TabExample />);


import { Tabs, WhiteSpace } from 'antd-mobile';
import OurCompany from './OurCompany' ;
import Partners from './Partners' ;
const tabs = [
  { title: '1CM' },
  { title: '合作方' }
];

const TabExample = () => (
  <div>
    <WhiteSpace />
    <div style={{ height: '100%' }}>
      <Tabs tabs={tabs}
        initalPage={'t2'}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height:'100%',backgroundColor: '#fff' ,}}>
          <OurCompany/>
          
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
          <Partners/>
        </div>
      </Tabs>
    </div>
  </div>
);
 export default class TabExamplea extends React.Component {
      render() {
          return <TabExample/>
      }
  }

