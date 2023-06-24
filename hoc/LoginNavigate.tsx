import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"

export const LoginNavigate: FC<PropsWithChildren<{}>> = ({ children }) => {
	const router = useRouter()

	const isAuth = true; // запрос за данными пользователя 
	//*useSelector(state => state.auth.isAuth)
	if (!isAuth) router.push("/test")

	return <>{children}</>
	//*LoginNavigate принимает параметрами children и возвращает их. Это hoc - hight order component
}