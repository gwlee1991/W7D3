import {connect} from 'react-redux';
import {requestOnePokemon,receiveOnePokemon} from "../../actions/pokemon_actions";
import {selectOnePokemon} from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  pokemon: selectOnePokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: () => dispatch(requestOnePokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
