import './styles/styles.scss';

interface ILegend {
  id: string;
  label: string;
  color: string;
}

export const GoogleMarkersLegend = () => {
  const data: ILegend[] = [
    {id: '1', label: 'Hora e local corretos', color: 'green'},
    {id: '2', label: 'Hora e local errados', color: 'red'},
    {id: '3', label: 'Local errado', color: 'blue'},
    {id: '4', label: 'Hora errado', color: 'orange'},
  ];

  return (
    <div className='legend'>
      {data.map((item: ILegend) => (
        <div key={item.label} className='legend-item'>
          <div className='legend-color' style={{backgroundColor: item.color}} />
          <span className='legend-label'>{item.label}</span>
        </div>
      ))}
    </div>
  );
};
