import {
    Container,
    makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import {PRODUCT_NAME} from "../../constants/titles";
import { useParams } from "react-router-dom";
import {getProductFetch, updateProductFetch} from "../../redux/actions/productActions";
import {connect} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import ProductForm from "../../components/ProductForm";

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
    const { productId } = useParams()
    const {editProduct,getProduct,products} = props;
    const [product, setProduct] = useState(null);
    useEffect(() => {
        getProduct(productId).then(json=>{
            setProduct(products.find(product => product.id == productId))
        });
    }, [getProduct]);
    const onSubmit = useCallback(item => {
        editProduct({id:productId, ...item, comments: []}).then(json => {
            props.history.push(`/product/${productId}`)
        })
    },[editProduct])
    return (
        <Page
            className={classes.root}
            title={`${PRODUCT_NAME}-Product`}
        >
            <Container maxWidth={false}>
                <h1>Edit product</h1>
                {product?(<ProductForm product={product} submit={onSubmit} buttonText="Save"/>):null}
            </Container>
        </Page>
    );
};
const mapStateToProps = (store) => ({
    products: store.product.products,
});
const mapDispatchToProps = (dispatch) => ({
    editProduct: (id) => updateProductFetch(dispatch,id),
    getProduct: (id) => getProductFetch(dispatch,id),
});
export default connect(mapStateToProps,mapDispatchToProps)(Product);