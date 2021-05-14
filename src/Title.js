function Title({ title, children }){
     return(
          <p className="pb-1"><span className="font-weight-600">{title} :</span> {children} </p>
     );
}

export default Title;