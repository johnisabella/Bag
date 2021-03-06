import React, { Component } from "react";
import { Container } from 'reactstrap';
import ChildPageHeader from '../../display/ChildPageHeader';
import ChildPageMainContainer from '../../display/ChildPageMainContainer';
import AddEditForm from '../../forms/AddEditForm';
import PictureCard from '../../display/PictureCard';
import SaveButton from '../../display/SaveButton';
import CancelButton from '../../display/CancelButton';
import DeleteButton from '../../display/DeleteButton';
import AddCard from '../../display/AddCard';
import ExistingBagCard from '../../display/ExistingBagCard'

class EditBag extends Component {
  state = {};

  render() {
    return (
    <div>
    <ChildPageHeader />
      <div className="child-page-edit-bag child-page-container">
      <div className="add-bag-title-container">
    <h2>Add/Create Bag</h2>
    </div>
      <div className="edit-bag-wrapper">
      {/* <PictureCard /> */}
      <div className="edit-bag-form-wrapper">
      <AddEditForm />
      {/* <ChildPageMainContainer /> */}
      {/* <SaveButton />
      <CancelButton />
      <DeleteButton /> */}
      </div>
      
      </div>
      </div>
      <div className="edit-items-container">
       {/* {props.children} */}
       <Container className="cards-wrapper">
         {/* <AddCard /> */}
         {/* <ExistingBagCard /> */}
       </Container>
      </div>
    </div>
    );
    }
  }

export default EditBag;
