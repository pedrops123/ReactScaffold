
export const HeaderComponent = ({ items }) => {
    return (
        <header className="default-components-color  center-flex-box-buttons">
            { 
                items.map((item) => 
                        (
                            <button key={item.id}> <a href={item.href}>{ item.descprition } </a>  </button>
                        )
                    )
            }
        </header>
    );
}

