import {connect} from 'react-redux';
import {requestOnePoke,receiveOnePoke} from "../../actions/pokemon_actions";
import PokemonDetail from './pokemon_detail';
import {selectPoke} from '../../reducers/selectors';

const mapStateToProps = (state, props) => ({
  poke: selectPoke(state, props.match.params.pokemonId)
});

const mapDispatchToProps = (dispatch, props) => ({
  requestOnePoke: () => dispatch(requestOnePoke(props.match.params.pokemonId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
