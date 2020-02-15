import React from 'react';
import { connect } from 'react-redux';
import { startGeneratePin } from '../store/actions/pinAction';
import { PinState } from '../store/types/pinType';
import { AppState } from '../store/configStore';
import { Dispatch, bindActionCreators } from 'redux';
import { AppActions } from '../store/types/actions';
import { ThunkDispatch } from 'redux-thunk';

interface HomePageProps {
  pins: PinState;
}

interface HomePageState {}

type Props = HomePageProps & LinkStateProps & LinkDispatchProps;

export class HomePagePage extends React.Component<Props, HomePageState> {
  onGenerate = () => {
    this.props.startGeneratePin();
  };

  render() {
    const { pins } = this.props;
    return (
      <div>
        {/* <h1>Expense Page</h1>
        <div>
          {pins.map(expense => (
            <div>
              <p>{expense.description}</p>
              <p>{expense.amount}</p>
              <p>{expense.note}</p>
              <button onClick={() => this.onRemove(expense.id)}>
                Remove Expense
              </button>
              <button onClick={() => this.onEdit(expense)}>Edit Expense</button>
            </div>
          ))}
        </div> */}
        oi
        {console.log(pins)}
      </div>
    );
  }
}

interface LinkStateProps {
  pins: PinState;
}
interface LinkDispatchProps {
  startGeneratePin: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: HomePageProps
): LinkStateProps => ({
  pins: state.pin
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: HomePageProps
): LinkDispatchProps => ({
  startGeneratePin: bindActionCreators(startGeneratePin, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePagePage);
