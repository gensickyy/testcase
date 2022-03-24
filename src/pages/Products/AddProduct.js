import {
    Container,
    makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import {PRODUCT_NAME} from "../../constants/titles";
import {connect} from "react-redux";
import {addProductFetch} from "../../redux/actions/productActions";
import ProductForm from "../../components/ProductForm";
import {useCallback} from "react";
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#9ddaff',
        minHeight: '100%',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    }
}));

const Product = props => {
    const classes = useStyles();
    const {addProduct} = props;
    const onSubmit = useCallback(product => {
        addProduct({id:getRandomInt(100),...product,comments:[]}).then(json=>{
            props.history.push('/products')
        })
    },[addProduct])
    return (
        <Page
            className={classes.root}
            title={`${PRODUCT_NAME}-Add Product`}
        >
            <Container maxWidth={false}>
                <h1>Added new product</h1>
                <ProductForm submit={onSubmit} buttonText="Add new product"/>
            </Container>
        </Page>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addProduct: (product) => addProductFetch(dispatch, product),
});
export default connect(null, mapDispatchToProps)(Product);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
