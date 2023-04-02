import {Box, Button, View} from 'native-base';
import {connect} from 'react-redux';

import React from 'react';
import {
  decrementAction,
  incrementAction,
} from '../redux/countSlice/countAction';

const Todo = ({count, incrementAction, decrementAction}) => {
  return (
    <View>
      <Box>Hello world {count}</Box>
      <Button onPress={incrementAction}>+</Button>
      <Button onPress={decrementAction}>-</Button>
    </View>
  );
};

const mapStateToProps = state => ({
  count: state.counter.count,
});
const actions = {
  incrementAction,
  decrementAction,
};
export default connect(mapStateToProps, actions)(Todo);
