 import { makeStyles } from '@material-ui/core/styles'


export const useStyles = makeStyles(({ spacing }) => ({
    paper: {
        width: 240
    },
    div: {
        padding: 20,
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        height: 60,
        marginLeft: 30,
        marginRight: 'auto'
    },
    footer: {
        
    },
    container: {
        marginTop: spacing(15)
    },
    card: {
        maxWidth: 350,
        minHeight: 150
    },
    imagePoke: {
        height: 250
    }
}))