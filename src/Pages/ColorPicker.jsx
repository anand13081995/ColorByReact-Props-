import PropTypes from 'prop-types';


const ColorPicker = (props) => {
    
    return (
        <div style={{ backgroundColor: props.color, padding: '10px', margin: '10px', borderRadius: '5px', width:'150px', height:'150px'}}>
            <h2>{props.title}</h2>
            <input type="color"  value={props.color} />
        </div>
    );
  };


  ColorPicker.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    onSelect: PropTypes.func,
  };
  



  export default ColorPicker;