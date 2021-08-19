import {Grid, Container} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function ProfileHeader(){

    return(

        <Container>
            <Grid container item md={6}>
                <Grid item>
                    <h1>RAKUTECH ADMIN</h1>
                </Grid>
                <Grid item>
                    <SearchIcon/>
                    <NotificationsNoneIcon/>
                    <PersonOutlineIcon/>
                </Grid>

            </Grid>
        </Container>

    );

}

export default ProfileHeader;