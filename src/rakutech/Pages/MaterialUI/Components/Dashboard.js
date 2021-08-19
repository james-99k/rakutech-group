import { Container, Grid } from "@material-ui/core"
import Button from '@material-ui/core/Button'

function Dashboard(){

    return(

        <Container>
            <Grid container>
                <Grid item>
                    <h2>Vivian Dela Cruz</h2>
                </Grid>
                <Grid item>
                <Button variant="contained" color="secondary">
                P 47,000
                </Button>
                </Grid>
            </Grid>
        </Container>

    );

}

export default Dashboard;