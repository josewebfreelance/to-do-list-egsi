import {Chip, Tooltip} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import React from "react";

interface Props {
    order: string;
    label: string;
    valueInclude: string;
    handleChangeOrder: (valueOrder: string) => void;
}

export const ItemOrderComponent = ({order, label, valueInclude, handleChangeOrder}: Props) => {
    return (
        <Tooltip title={order?.includes('-') ? 'Descendente' : 'Ascendente'}>
            <Chip label={label}
                  deleteIcon={order?.includes('-') && order?.includes(valueInclude) ? <ExpandMoreIcon/> :
                      <ExpandLessIcon/>}
                  color={order?.includes(valueInclude) ? 'primary' : 'default' as 'primary' | 'default'}
                  onClick={() => handleChangeOrder(`-${valueInclude}`)}
                  onDelete={() => handleChangeOrder(`-${valueInclude}`)}
            />
        </Tooltip>
    );
}
