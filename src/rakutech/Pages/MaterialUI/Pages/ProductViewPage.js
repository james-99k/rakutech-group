import { Container, Grid } from "@material-ui/core";
import ProductView from "../Components/ProductView/ProductView"
import ProfileHeader from "../Components/ProfileHeader";
import Dashboard from "../Components/Dashboard";
import './ProductViewPage.scss'

function ProductViewPage(){

    return(
        
        <Container>
            <div className="prod-header">
            <ProfileHeader/>
            </div>
            <Grid container direction="row">
                <Grid item>   
                    <Dashboard/>
                </Grid>
                <Grid item>
                    <ProductView />
                </Grid>
            </Grid>
        </Container>
    );

}

export default ProductViewPage;