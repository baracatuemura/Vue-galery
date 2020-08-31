import Home from "./components/Home";
import VivaRealProperties from "@/components/VivaRealProperties";
import ZapProperties from "@/components/ZapProperties";

export const routes =[
    {path: '/vivareal/:pagid', component: VivaRealProperties },
    {path: '/zap/:pagid', component: ZapProperties},
    {path: '/', component: Home},
    {path: '*', redirect: '/'}
]