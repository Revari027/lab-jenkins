export default function Vbn() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col items-center justify-center p-6">
            <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-md border border-slate-700/60 rounded-2xl p-8 shadow-2xl text-center space-y-6">
              
                <div className="space-y-2">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/30">
                        Tim Kami
                    </span>
                    <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent pt-2">
                        gas kenalan
                    </h1>
                </div>

                {/* List Anggota */}
                <ul className="space-y-3 text-left">
                    <li className="flex items-center gap-3 p-3 rounded-xl bg-slate-700/30 border border-slate-700/50 hover:bg-slate-700/50 transition duration-200">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                        <span className="font-medium text-slate-200">Halo, aku Rio</span>
                    </li>
                    <li className="flex items-center gap-3 p-3 rounded-xl bg-slate-700/30 border border-slate-700/50 hover:bg-slate-700/50 transition duration-200">
                        <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                        <span className="font-medium text-slate-200">Halo, aku Dicky</span>
                    </li>
                    <li className="flex items-center gap-3 p-3 rounded-xl bg-slate-700/30 border border-slate-700/50 hover:bg-slate-700/50 transition duration-200">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                        <span className="font-medium text-slate-200">Halo, aku Alif</span>
                    </li>
                </ul>

            
                <div>
                    <a 
                        href="./"
                        className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition duration-200"
                    >
                        ← Kembali ke Beranda
                    </a>
                </div>

            </div>
        </main>
    );
}