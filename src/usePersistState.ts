import { useEffect, useMemo, useState } from "react";

function PersistState <T>(initial_value: T, name: string, price: string): [T, (new_state: T) => void] {
    const _initial_value = useMemo(() => {
        const local_storage_value_str = localStorage.getItem('state:' + name + price);
        if (local_storage_value_str) {
            return JSON.parse(local_storage_value_str);
        }
        return initial_value;
    }, []);
    const [state, setState] = useState(_initial_value);
    useEffect(() => {
        const state_str = JSON.stringify(state);
        localStorage.setItem('state:' + name + price, state_str);
    }, [state]); 

    return [state, setState];
}

export default PersistState;