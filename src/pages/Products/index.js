import {
    Button,
    Container,
    makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import {PRODUCT_NAME} from "../../constants/titles";
import {connect} from 'react-redux';
import {getProductsFetch, removeProductFetch} from "../../redux/actions/productActions";
import {useCallback, useEffect} from "react";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#9ddaff',
        minHeight: '100%',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    }
}));

const Products = props => {
    const classes = useStyles();
    const {getProducts, removeProducts, products} = props;

    useEffect(() => {
        // getProducts();
    }, [getProducts]);

    const onRemoveProduct = useCallback((id) => {removeProducts(id)},[removeProducts]);

    return (
        <Page
            className={classes.root}
            title={`${PRODUCT_NAME}-Products`}
        >
            <Container maxWidth={false}>
                {products.map(products => (
                    <div key={products.id}>
                        <Link to={`/product/${products.id}`}>
                            {products.name}
                        </Link>
                        <Button
                            onClick={()=>onRemoveProduct(products.id)}
                            color="secondary"
                            variant="outlined"
                        >
                            Remove
                        </Button>
                    </div>
                ))}
                <div>
                    <Link to="/add-product">
                        Add new product
                    </Link>
                </div>
            </Container>
        </Page>
    );
};
const mapStateToProps = (store) => ({
    products: store.product.products,
});
const mapDispatchToProps = (dispatch) => ({
    getProducts: () => getProductsFetch(dispatch),
    removeProducts: (id) => removeProductFetch(dispatch,id),
});
export default connect(mapStateToProps,mapDispatchToProps)(Products);