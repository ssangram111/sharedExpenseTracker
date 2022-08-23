import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Button} from 'react-bootstrap';
import Addmember from './group/Addmember';
import AddExpense from './group/AddExpense';


const  MainTab = ({title,index}) => {
  console.log(index)
  return (
<>
<div className='shadow-sm text-primary mt-3 p-3 rounded d-flex justify-content-between'
>
<h2>Trip To IceLand</h2>
<Button variant="dark">My sheets</Button>
</div>

    <Tabs
      defaultActiveKey="groups"
      id="controlled-tab-example"
      className="mb-3"
      justify
      mt-9
    >
      <Tab eventKey="groups" title="Create Groups">
      <Addmember/>
      </Tab>
      <Tab eventKey="expenses" title="Create Expense">
      <AddExpense/>
      </Tab>
      <Tab eventKey="payments" title="Compute Payments">
        <h1>Hello its me Tab 3</h1>
      </Tab>
     
     </Tabs>
    </>
  );
}

export default MainTab;