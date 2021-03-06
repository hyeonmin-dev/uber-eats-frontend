import { gql, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RESTAURANT_FRAGMENT } from "../../fragments";
import { searchRestaurant, searchRestaurantVariables } from "../../__generated__/searchRestaurant";

const SEARCH_RESTAURANT = gql`
    query searchRestaurant($input: SearchRestaurantInput!) {
        searchRestaurant(input: $input) {
            ok
            error
            totalPages
            totalResults
            restaurants {
                ...RestaurantParts   
            }
        }
    }
    ${RESTAURANT_FRAGMENT}
`;

export const Search = () => {
    const [callQuery, {loading, data, called}] = useLazyQuery<searchRestaurant, searchRestaurantVariables>(SEARCH_RESTAURANT);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const [_, query] = location.search.split("?term=");
        if (!query) {
            return navigate('/', { replace: true });
        }
        
        callQuery({
            variables: {
                input: {
                    page: 1,
                    query
                }
            }
        })
    }, []);
    
    return (<div>Search</div>);
}

