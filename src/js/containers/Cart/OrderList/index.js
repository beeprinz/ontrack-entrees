import { connect } from 'react-redux';
import OrderList from './OrderList'

function mapStoreToProps(store) {
    return {
      description: store.search.description};
  }