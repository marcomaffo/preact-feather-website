import { render } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import * as featherIcons from 'preact-feather';
import { jsx } from 'preact/jsx-runtime';

const PreactFeatherIconsDisplay = () => {
  const [search, setSearch] = useState('');

  const searchChanged = useCallback((e: any) => {
    setSearch(e.target.value);
  }, []);
  return (
   <div style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', width: '100%'}}>
      <div style={{textAlign: 'center', color: '#3c3c3c', marginTop: '10px', fontSize: '150%'}}>preact-feather icons</div>
      <div style={{display: 'flex', alignItems: 'center', margin: '10px 10px 0 10px'}}>
        <featherIcons.Search />
        <input type="text" onInput={searchChanged} style={{padding: '10px', flexGrow: '1', marginLeft: '10px'}}/>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', padding: '10px 10px', overflow: 'auto'}}>
        {Object.keys(featherIcons)
          .filter((key) => key !== 'default' && key.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1)
          .map((key) => {
            const comp = featherIcons[key];
            return <div className="icon">
              {jsx(comp, {size: 32})}
              <span style={{marginTop: '5px'}}>{key}</span>
            </div>
          })}
      </div>
    </div>
  );
}

render(<PreactFeatherIconsDisplay />, document.body);