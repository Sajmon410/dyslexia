import React from 'react';
import './disleksija.css';
import { Button ,Box} from "@mui/material";

const Disleksija = () => {
    return(
        <div id="disleksija">
          <p className='naslovDisleksija'>Šta je disleksija?</p>
          <p className='textdisleksija'>Disleksija je specifična smetnja u učenju koja prvenstveno utiče na 
            veštine čitanja i pisanja. Međutim, to ne utiče samo na ove veštine.
             Disleksija je zapravo proces obrade informacija. Ljudi sa disleksijom 
             mogu imati poteškoća u obrađivanju i pamćenju informacija koje vide i čuju,
              što može uticati na učenje i sticanje veština pismenosti. 
            Disleksija može uticati i na druge oblasti kao što su organizacione veštine.</p>
            <Box textAlign='center'>
            <Button style={{maxWidth: '400px', maxHeight: '300px', minWidth: '400px', minHeight: '50px'}} className='kontakt' variant="contained">Kontaktirajte nas</Button>
</Box> 
        </div>
    );
};
export default Disleksija;