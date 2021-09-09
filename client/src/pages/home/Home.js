import React, { useEffect } from 'react'
import "./Home.css"
import {connect} from "react-redux"
import CardList from "../../components/CardList/CardList";
import { useHistory } from 'react-router-dom';
import { createList, getList, } from "../../redux/actions/listAction";
import {logoutUser} from "../../redux/actions/userAction"
import AddIcon from "@material-ui/icons/Add";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
function Home({
  authenticated,
  loading,
  createList,
  lists,
  getList,
  user,
  logoutUser,
}) {
  const history = useHistory();
  useEffect(() => {
    if (!loading && !authenticated) {
      history.replace("/login");
    } else {
      getList();
    }
  }, [loading, authenticated, history, getList]);

  const handleListAdd = () => {
    createList();
  };

  return (
    <div className="homepage-container">
      <div className="nav-btn">
      <button className="listadd-btn" onClick={handleListAdd}>
        <AddIcon/>
      </button>
      <button className="logout-btn" onClick={() => logoutUser()}>
        <PowerSettingsNewIcon/>
      </button>
      </div>
      
      <h3><PermIdentityIcon/>: {user}</h3>
      <div className="cardlist-container">
        {lists.map((list) => (
          <CardList key={list._id} list={list} cardlistIdx={list._id} />
        ))}
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
    loading: state.user.loading,
    lists: state.list.lists,
    loadingList: state.list.loading,
    user: state.user.email
  }
}

export default connect(mapStateToProps, { createList, getList, logoutUser })(
  Home
);