import ColorPicker from "../../Pages/ColorPicker";

const Colours = () => {

  const colors = [
    { color: '#FF5733', title: 'Red' },
    { color: '#33FF57', title: 'Green' },
    { color: '#5733FF', title: 'Blue' },
    { color: '#FFD700', title: 'Gold' },
    { color: '#FF69B4', title: 'Pink' },
    { color: '#00FFFF', title: 'Aqua' },
    { color: '#800080', title: 'Purple' },
    { color: '#FFFF00', title: 'Yellow' },
    { color: '#FF8C00', title: 'Orange' },
    { color: '#00FF00', title: 'Lime' },
  ];

  return (

    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>Color Picker App</h1>
        <div style={{display: 'flex', flexWrap:'wrap', width:'950px'}}>
            {colors.map((color, index) => (
            <ColorPicker key={index} color={color.color} title={color.title} />
            ))}
        </div>
    </div>

  );
};

export default Colours;